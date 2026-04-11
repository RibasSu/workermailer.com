<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
</script>

<Seo
	title={`${data.library.name} Docs`}
	description={`Live documentation for ${data.library.packageName}, synced from the repository README.`}
	path={data.library.docsHref}
	keywords={[data.library.name, 'documentation', 'Cloudflare Workers', 'worker-mailer']}
/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-12 md:py-14">
		<div class="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.6fr)] lg:items-end">
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
						<Icon name={data.library.icon} className="h-6 w-6" />
					</div>
					<div>
						<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">{data.library.packageName}</p>
						<p class="section-eyebrow mt-2">{data.library.name} docs</p>
					</div>
				</div>
				<h1 class="text-3xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-5xl">
					{data.library.name} documentation, synced from GitHub.
				</h1>
				<p class="max-w-2xl text-sm leading-7 text-ink-600 dark:text-ink-300">
					{data.library.description}
				</p>
			</div>

			<div class="surface-panel rounded-[1.75rem] p-5">
				<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">Source of truth</p>
				<ul class="mt-4 space-y-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
					<li class="flex items-start gap-3">
						<Icon name="github" className="mt-1 h-4 w-4 shrink-0" />
						<span>README is loaded from the live repository.</span>
					</li>
					<li class="flex items-start gap-3">
						<Icon name="clock" className="mt-1 h-4 w-4 shrink-0" />
						<span>{data.updatedAt ? `Last GitHub update: ${data.updatedAt}` : 'GitHub update timestamp unavailable.'}</span>
					</li>
					<li class="flex items-start gap-3">
						<Icon name="plug" className="mt-1 h-4 w-4 shrink-0" />
						<span>Use the library page for quick overview, and this page for full docs.</span>
					</li>
				</ul>
				<div class="mt-5 flex flex-wrap gap-3">
					<Button
						tag="a"
						href={data.library.npmUrl}
						target="_blank"
						rel="noreferrer"
						class="!rounded-full !bg-brand-500 !px-4 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="package" className="h-4 w-4" />
							<span>npm</span>
						</span>
					</Button>
					<Button
						tag="a"
						href={data.library.githubUrl}
						target="_blank"
						rel="noreferrer"
						outline
						class="!rounded-full !border-ink-300 !px-4 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="github" className="h-4 w-4" />
							<span>Repository</span>
						</span>
					</Button>
					<Button
						tag="a"
						href={`/changelog?lib=${data.library.slug}`}
						outline
						class="!rounded-full !border-ink-300 !px-4 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="clock" className="h-4 w-4" />
							<span>Changelog</span>
						</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
		<aside class="surface-panel rounded-[1.75rem] p-5 lg:sticky lg:top-28">
			<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">Quick guide</p>
			<ul class="mt-4 space-y-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
				<li class="flex items-start gap-3">
					<Icon name="download" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
					<span>Install with Bun first when possible.</span>
				</li>
				<li class="flex items-start gap-3">
					<Icon name="terminal" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
					<span>Use the examples and code blocks from the README as the canonical API shape.</span>
				</li>
				<li class="flex items-start gap-3">
					<Icon name="refresh" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
					<span>This page updates as the repository README changes.</span>
				</li>
				<li class="flex items-start gap-3">
					<Icon name="plug" className="mt-1 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-200" />
					<span>For EmDash-specific context, keep the library docs and the EmDash page side by side.</span>
				</li>
			</ul>
		</aside>

		<div class="surface-panel rounded-[2rem] p-6 sm:p-8">
			<div class="markdown-body" aria-live="polite">
				{@html data.html}
			</div>
		</div>
	</div>
</section>
