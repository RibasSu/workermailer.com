<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Seo from '$lib/components/Seo.svelte';
	import { exampleCards } from '$lib/content/site';
</script>

<Seo
	title="Examples"
	description="Example delivery flows for worker-mailer, summarized without embedding code outside the documentation."
	path="/examples"
	keywords={['examples', 'SMTP', 'Cloudflare Workers']}/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-12 md:py-16">
		<p class="section-eyebrow">Examples</p>
		<h1 class="section-title mt-4 max-w-3xl">Real delivery patterns, kept lightweight.</h1>
		<p class="section-copy mt-5 max-w-2xl">
			This page is now a quick overview of common worker-mailer use cases. The code stays in
			the documentation so the rest of the site can breathe a little more.
		</p>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="grid gap-4 md:grid-cols-2">
		{#each exampleCards as example}
			<article class="surface-panel rounded-[1.6rem] p-5 sm:p-6">
				<p class="font-mono text-[0.72rem] text-ink-500">{example.filename}</p>
				<h2 class="mt-3 text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
					{example.title}
				</h2>
				<p class="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
					{example.description}
				</p>
			</article>
		{/each}
	</div>

	<div class="mt-8 flex flex-wrap gap-3">
		<Button
			tag="a"
			href="/docs"
			class="!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
		>
			Open documentation
		</Button>
		<Button
			tag="a"
			href="/docs#quick-start"
			outline
			class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
		>
			Go to quick start
		</Button>
	</div>
</section>
