import { error } from '@sveltejs/kit';
import { marked } from 'marked';

import { getLibraryBySlug, libraries, type LibraryItem } from '$lib/content/site';

type FetchLike = typeof fetch;

type DocsPageSource = {
	slug: string;
	title: string;
	summary: string;
	source: string;
};

type DocsGroupSource = {
	title: string;
	pages: DocsPageSource[];
};

type DocsManifestSource = {
	title: string;
	description: string;
	defaultPage: string;
	groups: DocsGroupSource[];
};

export type DocsTocItem = {
	id: string;
	title: string;
	depth: number;
};

export type DocsPageItem = DocsPageSource & {
	href: string;
	rawUrl: string;
	editUrl: string;
};

export type DocsGroupItem = {
	title: string;
	pages: DocsPageItem[];
};

export type DocsManifest = {
	title: string;
	description: string;
	defaultPage: string;
	groups: DocsGroupItem[];
};

marked.setOptions({
	gfm: true
});

export function getLibraryOrThrow(slug: string): LibraryItem {
	const library = getLibraryBySlug(slug);

	if (!library) {
		throw error(404, `Unknown library: ${slug}`);
	}

	return library;
}

export function getDefaultLibrarySlug(slug: string | null): string {
	if (!slug) {
		return libraries[0]?.slug ?? 'smtp';
	}

	return getLibraryBySlug(slug) ? slug : libraries[0]?.slug ?? 'smtp';
}

export async function fetchGithubMarkdown(
	fetcher: FetchLike,
	url: string,
	fallbackMessage: string
): Promise<{ html: string; updatedAt: string | null }> {
	const response = await fetcher(url, {
		headers: {
			'cache-control': 'no-cache'
		}
	});

	if (!response.ok) {
		return {
			html: `<p>${fallbackMessage}</p>`,
			updatedAt: null
		};
	}

	const text = await response.text();
	const { html } = await renderMarkdown(text);

	return {
		html,
		updatedAt: response.headers.get('last-modified')
	};
}

export async function fetchLibraryDocsManifest(
	fetcher: FetchLike,
	library: LibraryItem
): Promise<DocsManifest> {
	const response = await fetcher(library.docsManifestUrl, {
		headers: {
			'cache-control': 'no-cache'
		}
	});

	if (!response.ok) {
		throw error(500, `Unable to load the ${library.name} docs manifest.`);
	}

	const manifest = (await response.json()) as DocsManifestSource;

	return {
		title: manifest.title,
		description: manifest.description,
		defaultPage: manifest.defaultPage,
		groups: manifest.groups.map((group) => ({
			title: group.title,
			pages: group.pages.map((page) => ({
				...page,
				href:
					page.slug === manifest.defaultPage
						? library.docsHref
						: `${library.docsHref}/${page.slug}`,
				rawUrl: `${library.rawBaseUrl}${page.source}`,
				editUrl: `${library.blobBaseUrl}${page.source}`
			}))
		}))
	};
}

export function getDocsPageOrThrow(manifest: DocsManifest, slug: string): DocsPageItem {
	for (const group of manifest.groups) {
		for (const page of group.pages) {
			if (page.slug === slug) {
				return page;
			}
		}
	}

	throw error(404, `Unknown docs page: ${slug}`);
}

export async function loadLibraryDocsPage(
	fetcher: FetchLike,
	library: LibraryItem,
	requestedPageSlug?: string | null
): Promise<{
	manifest: DocsManifest;
	page: DocsPageItem;
	html: string;
	toc: DocsTocItem[];
	updatedAt: string | null;
}> {
	const manifest = await fetchLibraryDocsManifest(fetcher, library);
	const page = getDocsPageOrThrow(manifest, requestedPageSlug || manifest.defaultPage);
	const response = await fetcher(page.rawUrl, {
		headers: {
			'cache-control': 'no-cache'
		}
	});

	if (!response.ok) {
		throw error(500, `Unable to load the ${library.name} docs page ${page.slug}.`);
	}

	const markdown = await response.text();
	const { html, toc } = await renderMarkdown(markdown);

	return {
		manifest,
		page,
		html,
		toc,
		updatedAt: response.headers.get('last-modified')
	};
}

async function renderMarkdown(markdown: string): Promise<{ html: string; toc: DocsTocItem[] }> {
	const rendered = await marked.parse(markdown);
	const toc: DocsTocItem[] = [];
	const slugger = createSlugger();
	const html = String(rendered).replace(/<h([1-6])>(.*?)<\/h\1>/g, (_match, depthValue, inner) => {
		const depth = Number(depthValue);
		const title = decodeHtml(stripTags(inner)).trim();
		const id = slugger(title);

		if (depth >= 2 && depth <= 3 && title) {
			toc.push({ id, title, depth });
		}

		return `<h${depth} id="${id}">${inner}</h${depth}>`;
	});

	return { html, toc };
}

function createSlugger() {
	const counts = new Map<string, number>();

	return (value: string) => {
		const base = value
			.toLowerCase()
			.normalize('NFKD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '') || 'section';
		const seen = counts.get(base) ?? 0;
		counts.set(base, seen + 1);
		return seen === 0 ? base : `${base}-${seen}`;
	};
}

function stripTags(value: string): string {
	return value.replace(/<[^>]+>/g, '');
}

function decodeHtml(value: string): string {
	return value
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'");
}
