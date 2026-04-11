<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { libraries, site } from '$lib/content/site';
</script>

<Seo
	title="Libraries"
	description="Worker Mailer libraries for SMTP and Resend on Cloudflare Workers, with Bun-first workflows and sandbox bundles."
	path="/libs"
	keywords={['libraries', 'SMTP', 'Resend', 'Cloudflare Workers']}/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-12 md:py-16">
		<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">{site.releaseLine}</p>
		<p class="section-eyebrow mt-5">Libraries</p>
		<h1 class="section-title mt-4 max-w-4xl">Two transports, one Worker-native workflow.</h1>
		<p class="section-copy mt-5 max-w-2xl">
			Use SMTP when you want TCP socket delivery, or Resend when you prefer the API-driven
			workflow. Both are built for Cloudflare Workers and share queue helpers.
		</p>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="grid gap-6 lg:grid-cols-2">
		{#each libraries as library}
			<article class="surface-panel rounded-[1.75rem] p-6 sm:p-7">
				<div class="flex flex-wrap items-center justify-between gap-3">
					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
							<Icon name={library.icon} className="h-6 w-6" />
						</div>
						<div>
						<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">{library.packageName}</p>
						<h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
							{library.name}
						</h2>
						</div>
					</div>
					<p class="text-sm font-semibold tracking-tight text-brand-700 dark:text-brand-300">
						v{library.version}
					</p>
				</div>

				<p class="mt-4 text-sm leading-7 text-ink-600 dark:text-ink-300">
					{library.description}
				</p>

				<ul class="mt-4 space-y-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
					{#each library.highlights as item}
						<li>{item}</li>
					{/each}
				</ul>

				<div class="mt-6 flex flex-wrap gap-3">
					<Button
						tag="a"
						href={`/libs/${library.slug}`}
						class="!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
					>
						Library page
					</Button>
					<Button
						tag="a"
						href={library.docsHref}
						outline
						class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="book-open" className="h-4 w-4" />
							<span>Docs</span>
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
							<span>View on npm</span>
						</span>
					</Button>
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="section-band border-y border-ink-300/80 py-14 dark:border-ink-700 md:py-18">
	<div class="site-shell grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
		<div class="space-y-4">
			<p class="section-eyebrow">EmDash</p>
			<h2 class="section-title max-w-lg">Sandbox bundles ship with every library.</h2>
			<p class="section-copy">
				Both SMTP and Resend include EmDash-ready sandbox bundles in their repositories so you
				can wire providers without waiting on new API guesses.
			</p>
		</div>
		<div class="surface-panel rounded-[1.75rem] p-6 sm:p-7">
			<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">
				If you are evaluating EmDash, start with the SMTP bundle for direct socket delivery, or
				use Resend when you prefer API-based sending. The libs page keeps links aligned with the
				current packages.
			</p>
		</div>
	</div>
</section>
