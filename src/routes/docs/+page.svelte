<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/content/site';
	import openSourceIllustration from '$lib/assets/illustrations/open-source.svg';

	let { data } = $props();
</script>

<Seo
	title="Documentation"
	description="Developer-first documentation for the Worker Mailer libraries, organized by package and loaded from the real docs folders in GitHub."
	path="/docs"
	keywords={['documentation', 'SMTP', 'Resend', 'Cloudflare Workers']}
/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-10 md:py-12">
		<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">{site.releaseLine}</p>
		<div class="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] lg:items-start">
			<div class="space-y-4">
				<p class="section-eyebrow">Docs Directory</p>
				<h1 class="text-3xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-5xl">
					Real docs trees for each library, not stretched README pages.
				</h1>
				<p class="max-w-3xl text-sm leading-7 text-ink-600 dark:text-ink-300 md:text-[0.98rem]">
					Each provider now owns its own `docs/` folder in the repository. The site renders those
					pages directly, so navigation, structure, and copy stay aligned with the actual library.
				</p>
			</div>

			<div class="docs-top-card">
				<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">What changed</p>
				<div class="docs-illustration-frame mt-4">
					<img
						src={openSourceIllustration}
						alt="Open-source documentation illustration from unDraw adapted to the worker-mailer palette."
						class="h-auto w-full"
					/>
				</div>
				<ul class="mt-4 space-y-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
					<li class="flex items-start gap-3">
						<Icon name="library" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
						<span>Every library has its own docs source tree.</span>
					</li>
					<li class="flex items-start gap-3">
						<Icon name="refresh" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
						<span>The website reads manifest and markdown from GitHub instead of mirroring content manually.</span>
					</li>
					<li class="flex items-start gap-3">
						<Icon name="terminal" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
						<span>Page structure now follows developer workflows instead of marketing sections.</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="site-shell py-8 md:py-10">
	<div class="space-y-6">
		{#each data.docsLibraries as entry}
			<article class="docs-directory-card">
				<div class="grid gap-6 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:items-start">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="docs-library-icon">
								<Icon name={entry.library.icon} className="h-6 w-6" />
							</div>
							<div>
								<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">{entry.library.packageName}</p>
								<h2 class="mt-2 text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
									{entry.library.name}
								</h2>
							</div>
						</div>

						<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">{entry.manifest.description}</p>

						<div class="flex flex-wrap gap-3">
							<a href={entry.library.docsHref} class="docs-action-link docs-action-link--solid">
								<Icon name="book-open" className="h-4 w-4" />
								<span>Open {entry.library.name} docs</span>
							</a>
							<a href={`/changelog?lib=${entry.library.slug}`} class="docs-action-link">
								<Icon name="clock" className="h-4 w-4" />
								<span>Changelog</span>
							</a>
						</div>
					</div>

					<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
						{#each entry.manifest.groups as group}
							<section class="docs-directory-group">
								<p class="docs-sidebar-group-title">{group.title}</p>
								<ul class="mt-3 space-y-2.5">
									{#each group.pages as page}
										<li>
											<a href={page.href} class="docs-directory-link">
												<span class="docs-nav-link-title">{page.title}</span>
												<span class="docs-nav-link-summary">{page.summary}</span>
											</a>
										</li>
									{/each}
								</ul>
							</section>
						{/each}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
