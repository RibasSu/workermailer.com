<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
</script>

<Seo
	title="Changelog"
	description="Changelog synced from GitHub for every Worker Mailer library."
	path="/changelog"
	keywords={['changelog', 'releases', 'version history']}
/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-12 md:py-14">
		<p class="section-eyebrow">Changelog</p>
		<h1 class="text-3xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-5xl">
			Live release notes for every library.
		</h1>
		<p class="mt-4 max-w-2xl text-sm leading-7 text-ink-600 dark:text-ink-300">
			Choose a package and this page will load its real `CHANGELOG.md` from GitHub.
		</p>

		<div class="mt-6 flex flex-wrap gap-3">
			{#each data.libraries as library}
				<Button
					tag="a"
					href={`/changelog?lib=${library.slug}`}
					outline={data.selectedLibrary.slug !== library.slug}
					class={data.selectedLibrary.slug === library.slug
						? '!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300'
						: '!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50'}
				>
					<span class="inline-flex items-center gap-2">
						<Icon name={library.icon} className="h-4 w-4" />
						<span>{library.name}</span>
					</span>
				</Button>
			{/each}
		</div>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
		<aside class="surface-panel rounded-[1.75rem] p-5 lg:sticky lg:top-28">
			<div class="flex items-center gap-3">
				<div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
					<Icon name={data.selectedLibrary.icon} className="h-6 w-6" />
				</div>
				<div>
					<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">{data.selectedLibrary.packageName}</p>
					<h2 class="mt-2 text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
						{data.selectedLibrary.name}
					</h2>
				</div>
			</div>

			<ul class="mt-5 space-y-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
				<li class="flex items-start gap-3">
					<Icon name="github" className="mt-1 h-4 w-4 shrink-0" />
					<span>Loaded from GitHub raw, not copied into the site.</span>
				</li>
				<li class="flex items-start gap-3">
					<Icon name="clock" className="mt-1 h-4 w-4 shrink-0" />
					<span>{data.updatedAt ? `Last GitHub update: ${data.updatedAt}` : 'GitHub update timestamp unavailable.'}</span>
				</li>
				<li class="flex items-start gap-3">
					<Icon name="book-open" className="mt-1 h-4 w-4 shrink-0" />
					<span>Jump straight into the library docs from here.</span>
				</li>
			</ul>

			<div class="mt-5 flex flex-wrap gap-3">
				<Button
					tag="a"
					href={data.selectedLibrary.docsHref}
					class="!rounded-full !bg-ink-950 !px-4 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white dark:!bg-white dark:!text-ink-950"
				>
					<span class="inline-flex items-center gap-2">
						<Icon name="book-open" className="h-4 w-4" />
						<span>Open docs</span>
					</span>
				</Button>
				<Button
					tag="a"
					href={data.selectedLibrary.githubUrl}
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
			</div>
		</aside>

		<div class="surface-panel rounded-[2rem] p-6 sm:p-8">
			<div class="markdown-body" aria-live="polite">
				{@html data.html}
			</div>
		</div>
	</div>
</section>
