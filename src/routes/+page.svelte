<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Seo from '$lib/components/Seo.svelte';
	import { exampleCards, featureItems, site } from '$lib/content/site';
</script>

<Seo title={site.name} description={site.description} path="/" />

<section class="border-b border-ink-300/80">
	<div class="site-shell grid gap-10 py-12 md:py-16 xl:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] xl:items-start">
		<div class="space-y-6">
			<div class="space-y-3">
				<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">
					v{site.version} • MIT licensed
				</p>
				<p class="section-eyebrow">Worker runtime email</p>
				<h1 class="section-title max-w-3xl">{site.tagline}</h1>
				<p class="section-copy max-w-2xl">
					worker-mailer keeps SMTP inside the Worker runtime, with a smaller transport layer,
					Bun-friendly workflows, and documentation that stays close to what the package
					actually ships.
				</p>
			</div>

			<div class="flex flex-wrap gap-3">
				<Button
					tag="a"
					href="/docs"
					class="!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
				>
					Get Started
				</Button>
				<Button
					tag="a"
					href={site.npmUrl}
					target="_blank"
					rel="noreferrer"
					outline
					class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
				>
					View on npm
				</Button>
			</div>

			<div class="grid gap-3 sm:grid-cols-3">
				<div class="surface-panel rounded-[1.35rem] px-4 py-4">
					<p class="text-[0.68rem] uppercase tracking-[0.18em] text-ink-500">Transport</p>
					<p class="mt-2 text-base font-semibold tracking-tight text-ink-800 dark:text-ink-50">SMTP</p>
					<p class="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
						Direct delivery from Cloudflare Workers.
					</p>
				</div>
				<div class="surface-panel rounded-[1.35rem] px-4 py-4">
					<p class="text-[0.68rem] uppercase tracking-[0.18em] text-ink-500">Queues</p>
					<p class="mt-2 text-base font-semibold tracking-tight text-ink-800 dark:text-ink-50">Optional</p>
					<p class="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
						Move send work off the request path.
					</p>
				</div>
				<div class="surface-panel rounded-[1.35rem] px-4 py-4">
					<p class="text-[0.68rem] uppercase tracking-[0.18em] text-ink-500">Typing</p>
					<p class="mt-2 text-base font-semibold tracking-tight text-ink-800 dark:text-ink-50">TypeScript</p>
					<p class="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">
						Hooks, DSN, attachments, and envelopes.
					</p>
				</div>
			</div>
		</div>

		<div class="hero-gradient rounded-[1.75rem] border border-brand-200/80 p-[1px] dark:border-brand-700/40">
			<div class="surface-panel rounded-[calc(1.75rem-1px)] p-5 sm:p-6">
				<div class="space-y-5">
					<div>
						<p class="section-eyebrow">Current package surface</p>
						<p class="mt-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
							The site avoids filler UI and invented integration details. What you see here is
							the real package surface as it exists today.
						</p>
					</div>

					<div class="space-y-4">
						<div class="border-b border-ink-300/70 pb-4 dark:border-ink-700">
							<p class="text-sm font-semibold tracking-tight text-ink-800 dark:text-ink-50">
								Direct Worker delivery
							</p>
							<p class="mt-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
								Cloudflare TCP sockets, SMTP auth modes, HTML/text bodies, and attachments.
							</p>
						</div>
						<div class="border-b border-ink-300/70 pb-4 dark:border-ink-700">
							<p class="text-sm font-semibold tracking-tight text-ink-800 dark:text-ink-50">
								Operational controls
							</p>
							<p class="mt-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
								Lifecycle hooks, DSN, custom SMTP errors, timeouts, and queue helpers.
							</p>
						</div>
						<div>
							<p class="text-sm font-semibold tracking-tight text-ink-800 dark:text-ink-50">
								Careful EmDash positioning
							</p>
							<p class="mt-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
								The project tracks the EmDash discussion, but this site does not pretend the
								integration contract is final.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="site-shell py-14 md:py-18">
	<div class="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
		<div class="space-y-4">
			<p class="section-eyebrow">Current surface area</p>
			<h2 class="section-title max-w-lg">A smaller mail stack, tuned for edge workloads.</h2>
			<p class="section-copy">
				worker-mailer focuses on the pieces that matter most in Workers: a lean SMTP client,
				solid types, and predictable delivery behavior.
			</p>
		</div>

		<div class="surface-panel overflow-hidden rounded-[1.75rem]">
			{#each featureItems as item, index}
				<article class={`grid gap-3 px-4 py-4 md:grid-cols-[104px_minmax(0,1fr)] md:px-6 ${index !== 0 ? 'border-t border-ink-300/70 dark:border-ink-700' : ''}`}>
					<div>
						<p class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
							{item.icon}
						</p>
					</div>
					<div class="space-y-2">
						<h3 class="text-lg font-semibold tracking-tight text-ink-800 dark:text-ink-50">
							{item.title}
						</h3>
						<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">
							{item.description}
						</p>
						<p class="text-sm leading-7 text-ink-500 dark:text-ink-400">
							{item.note}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="border-y border-ink-300/80 bg-white/45 py-14 dark:border-ink-700 dark:bg-ink-950/35 md:py-18">
	<div class="site-shell grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start">
		<div class="space-y-5">
			<p class="section-eyebrow">Example flows</p>
			<h2 class="section-title max-w-xl">Practical patterns without dumping code on the landing page.</h2>
			<p class="section-copy">
				The examples page now works like a catalog of real use cases. The full snippets stay in
				the documentation, where they belong.
			</p>
			<div class="flex flex-wrap gap-3">
				<Button
					tag="a"
					href="/examples"
					class="!rounded-full !bg-ink-800 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white dark:!bg-ink-50 dark:!text-ink-900"
				>
					View examples
				</Button>
				<Button
					tag="a"
					href="/docs"
					outline
					class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
				>
					Read the docs
				</Button>
			</div>
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			{#each exampleCards.slice(0, 4) as example}
				<div class="surface-panel rounded-[1.5rem] p-5">
					<p class="font-mono text-[0.72rem] text-ink-500">{example.filename}</p>
					<h3 class="mt-3 text-lg font-semibold tracking-tight text-ink-800 dark:text-ink-50">
						{example.title}
					</h3>
					<p class="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
						{example.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="site-shell py-14 md:py-18">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
		<div class="space-y-5">
			<p class="section-eyebrow">EmDash</p>
			<h2 class="section-title max-w-xl">Following the discussion without pretending the API is settled.</h2>
			<p class="section-copy">
				worker-mailer is relevant to the EmDash conversation because it already solves SMTP on
				Cloudflare Workers. That is different from claiming a final plugin contract or showing
				setup steps that have not been decided yet.
			</p>
		</div>

		<div class="surface-panel rounded-[1.75rem] p-5 sm:p-6">
			<div class="grid gap-5 md:grid-cols-3">
				<div class="space-y-2">
					<p class="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
						Concrete today
					</p>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">
						SMTP transport, queues, hooks, attachments, and TypeScript support.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
						Still open
					</p>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">
						Provider lifecycle, config conventions, and transport boundaries in EmDash.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
						How this site handles it
					</p>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">
						We link to the discussion and summarize the themes without fabricating examples.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
