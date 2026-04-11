import { error } from '@sveltejs/kit';
import { marked } from 'marked';

import { getLibraryBySlug, libraries, type LibraryItem } from '$lib/content/site';

type FetchLike = typeof fetch;

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
	const html = await marked.parse(text);

	return {
		html,
		updatedAt: response.headers.get('last-modified')
	};
}

export function getDefaultLibrarySlug(slug: string | null): string {
	if (!slug) {
		return libraries[0]?.slug ?? 'smtp';
	}

	return getLibraryBySlug(slug) ? slug : libraries[0]?.slug ?? 'smtp';
}
