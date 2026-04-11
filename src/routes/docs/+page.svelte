<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { libraries, site } from '$lib/content/site';
</script>

<Seo
	title="Documentation"
	description="Developer-first documentation for the Worker Mailer libraries, synced with the live repositories."
	path="/docs"
	keywords={['documentation', 'SMTP', 'Resend', 'Cloudflare Workers']}
/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-12 md:py-14">
		<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">{site.releaseLine}</p>
		<p class="section-eyebrow mt-5">Documentation</p>
		<h1 class="text-3xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-5xl">
			One doc set per library, wired to the real source of truth.
		</h1>
		<p class="mt-4 max-w-2xl text-sm leading-7 text-ink-600 dark:text-ink-300">
			Pick a library, land in its own documentation page, and read the version that stays aligned
			with the repository README on GitHub.
		</p>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="grid gap-6 lg:grid-cols-2">
		{#each libraries as library}
			<article class="surface-panel rounded-[2rem] p-6 sm:p-7">
				<div class="flex flex-wrap items-start justify-between gap-4">
					<div class="space-y-3">
						<div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
							<Icon name={library.icon} className="h-6 w-6" />
						</div>
						<div>
							<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">{library.packageName}</p>
							<h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
								{library.name}
							</h2>
						</div>
					</div>
					<div class="rounded-full border border-brand-500/35 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-brand-700 dark:text-brand-200">
						v{library.version}
					</div>
				</div>

				<p class="mt-5 text-sm leading-7 text-ink-600 dark:text-ink-300">
					{library.description}
				</p>

				<ul class="mt-5 space-y-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
					{#each library.highlights as highlight}
						<li class="flex items-start gap-3">
							<Icon name="arrow-right" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
							<span>{highlight}</span>
						</li>
					{/each}
				</ul>

				<div class="mt-6 flex flex-wrap gap-3">
					<Button
						tag="a"
						href={library.docsHref}
						class="!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="book-open" className="h-4 w-4" />
							<span>Open docs</span>
						</span>
					</Button>
					<Button
						tag="a"
						href={library.npmUrl}
						target="_blank"
						rel="noreferrer"
						outline
						class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="package" className="h-4 w-4" />
							<span>npm</span>
						</span>
					</Button>
					<Button
						tag="a"
						href={`/changelog?lib=${library.slug}`}
						outline
						class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="clock" className="h-4 w-4" />
							<span>Changelog</span>
						</span>
					</Button>
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="section-band border-y border-ink-300/80 py-12 dark:border-ink-700 md:py-16">
	<div class="site-shell grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
		<div class="space-y-4">
			<p class="section-eyebrow">Developer experience</p>
			<h2 class="section-title max-w-lg">Docs that point to the real repo, not a stale copy.</h2>
		</div>
		<div class="surface-panel rounded-[1.75rem] p-6 sm:p-7">
			<div class="grid gap-4 sm:grid-cols-3">
				<div class="space-y-2">
					<div class="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
						<Icon name="refresh" className="h-5 w-5" />
					</div>
					<p class="text-sm font-semibold text-ink-800 dark:text-ink-50">Synced</p>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">README and changelog are fetched from GitHub.</p>
				</div>
				<div class="space-y-2">
					<div class="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
						<Icon name="terminal" className="h-5 w-5" />
					</div>
					<p class="text-sm font-semibold text-ink-800 dark:text-ink-50">Bun-first</p>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">Install and usage snippets stay close to Worker reality.</p>
				</div>
				<div class="space-y-2">
					<div class="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
						<Icon name="plug" className="h-5 w-5" />
					</div>
					<p class="text-sm font-semibold text-ink-800 dark:text-ink-50">EmDash-aware</p>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">Sandbox bundle links stay visible from every library page.</p>
				</div>
			</div>
		</div>
	</div>
</section>
