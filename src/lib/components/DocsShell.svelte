<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { libraries, type LibraryItem } from '$lib/content/site';
	import type { DocsManifest, DocsPageItem, DocsTocItem } from '$lib/server/github-markdown';

	type Props = {
		library: LibraryItem;
		manifest: DocsManifest;
		page: DocsPageItem;
		html: string;
		toc: DocsTocItem[];
		updatedAt: string | null;
	};

	let { library, manifest, page, html, toc, updatedAt }: Props = $props();
	let navQuery = $state('');

	const pagePath = $derived(page.slug === manifest.defaultPage ? library.docsHref : `${library.docsHref}/${page.slug}`);
	const pageDescription = $derived(page.summary || manifest.description);
	const filteredGroups = $derived.by(() => {
		const query = navQuery.trim().toLowerCase();

		if (!query) {
			return manifest.groups;
		}

		return manifest.groups
			.map((group) => ({
				...group,
				pages: group.pages.filter(
					(entry) =>
						entry.title.toLowerCase().includes(query) ||
						entry.summary.toLowerCase().includes(query)
				)
			}))
			.filter((group) => group.pages.length > 0);
	});
</script>

<Seo
	title={`${library.name} Docs - ${page.title}`}
	description={pageDescription}
	path={pagePath}
	keywords={[library.name, library.packageName, page.title, 'documentation', 'Cloudflare Workers']}
/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-8 md:py-10">
		<nav class="docs-breadcrumbs" aria-label="Breadcrumb">
			<a href="/docs">Docs</a>
			<span>/</span>
			<a href={library.docsHref}>{library.name}</a>
			<span>/</span>
			<span aria-current="page">{page.title}</span>
		</nav>

		<div class="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<div class="docs-library-icon">
						<Icon name={library.icon} className="h-6 w-6" />
					</div>
					<div>
						<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">{library.packageName}</p>
						<p class="section-eyebrow mt-2">{manifest.title}</p>
					</div>
				</div>

				<h1 class="text-3xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-5xl">
					{page.title}
				</h1>
				<p class="max-w-3xl text-sm leading-7 text-ink-600 dark:text-ink-300 md:text-[0.98rem]">
					{page.summary}
				</p>
			</div>

			<div class="docs-top-card">
				<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">Page options</p>
				<div class="mt-4 flex flex-wrap gap-3">
					<a href={page.rawUrl} target="_blank" rel="noreferrer" class="docs-action-link docs-action-link--solid">
						<Icon name="book-open" className="h-4 w-4" />
						<span>Open markdown</span>
					</a>
					<a href={page.editUrl} target="_blank" rel="noreferrer" class="docs-action-link">
						<Icon name="github" className="h-4 w-4" />
						<span>Edit page</span>
					</a>
					<a href={library.githubUrl} target="_blank" rel="noreferrer" class="docs-action-link">
						<Icon name="link" className="h-4 w-4" />
						<span>Repository</span>
					</a>
				</div>
				<p class="mt-4 text-sm leading-7 text-ink-600 dark:text-ink-300">
					{updatedAt ? `Last GitHub update: ${updatedAt}` : 'GitHub update timestamp unavailable.'}
				</p>
			</div>
		</div>
	</div>
</section>

<section class="site-shell py-6 md:py-8">
	<div class="docs-layout-grid">
		<aside class="docs-sidebar lg:sticky lg:top-24">
			<div class="docs-sidebar-shell">
				<div class="space-y-4">
					<div>
						<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">Library</p>
						<div class="mt-4 flex flex-wrap gap-2">
							{#each libraries as item}
								<a
									href={item.docsHref}
									class={item.slug === library.slug ? 'docs-pill docs-pill--active' : 'docs-pill'}
								>
									<Icon name={item.icon} className="h-4 w-4" />
									<span>{item.name}</span>
								</a>
							{/each}
						</div>
					</div>

					<div>
						<label class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500" for="docs-search">
							Search sidebar
						</label>
						<div class="docs-search-shell mt-3">
							<Icon name="search" className="h-4 w-4 shrink-0" />
							<input
								id="docs-search"
								type="search"
								bind:value={navQuery}
								placeholder="Filter pages..."
								class="docs-search-input"
							/>
						</div>
					</div>
				</div>

				<div class="mt-6 space-y-6">
					{#if filteredGroups.length > 0}
						{#each filteredGroups as group}
							<section class="space-y-3">
								<h2 class="docs-sidebar-group-title">{group.title}</h2>
								<ul class="space-y-1.5">
									{#each group.pages as entry}
										<li>
											<a
												href={entry.href}
												class={entry.slug === page.slug ? 'docs-nav-link docs-nav-link--active' : 'docs-nav-link'}
											>
												<span class="docs-nav-link-title">{entry.title}</span>
												<span class="docs-nav-link-summary">{entry.summary}</span>
											</a>
										</li>
									{/each}
								</ul>
							</section>
						{/each}
					{:else}
						<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">No docs pages match that filter.</p>
					{/if}
				</div>
			</div>
		</aside>

		<article class="docs-article-shell surface-panel">
			<div class="docs-article-meta">
				<span class="docs-badge">v{library.version}</span>
				<a href={`/changelog?lib=${library.slug}`} class="docs-inline-link">
					<Icon name="clock" className="h-4 w-4" />
					<span>Release notes</span>
				</a>
			</div>
			<div class="markdown-body docs-markdown" aria-live="polite">
				{@html html}
			</div>
		</article>

		<aside class="docs-rail lg:sticky lg:top-24">
			<div class="docs-rail-shell">
				<section>
					<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">On this page</p>
					{#if toc.length > 0}
						<ul class="mt-4 space-y-2.5">
							{#each toc as item}
								<li>
									<a
										href={`#${item.id}`}
										class={item.depth === 3 ? 'docs-toc-link docs-toc-link--nested' : 'docs-toc-link'}
									>
										{item.title}
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<p class="mt-4 text-sm leading-7 text-ink-600 dark:text-ink-300">This page is short enough that it does not need a section index.</p>
					{/if}
				</section>

				<section class="mt-8 border-t border-ink-300/80 pt-6 dark:border-ink-700">
					<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">Developer workflow</p>
					<ul class="mt-4 space-y-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
						<li class="flex items-start gap-3">
							<Icon name="terminal" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
							<span>Use Bun first for install and release workflows when the repo supports it.</span>
						</li>
						<li class="flex items-start gap-3">
							<Icon name="refresh" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
							<span>The site loads docs straight from GitHub, so repo changes become the source of truth.</span>
						</li>
						<li class="flex items-start gap-3">
							<Icon name="plug" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
							<span>Each library keeps its own docs tree so provider-specific details stay isolated.</span>
						</li>
					</ul>
				</section>
			</div>
		</aside>
	</div>
</section>
