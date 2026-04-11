<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { libraries, snippets } from '$lib/content/site';

	const smtp = libraries.find((item) => item.slug === 'smtp');
</script>

<Seo
	title="SMTP Library"
	description="@workermailer/smtp delivers SMTP from Cloudflare Workers with hooks, DSN, attachments, and queues."
	path="/libs/smtp"
	keywords={['SMTP', 'Cloudflare Workers', 'worker-mailer']}/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-12 md:py-16">
		<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">{smtp?.packageName} • v{smtp?.version}</p>
		<p class="section-eyebrow mt-5">SMTP library</p>
		<h1 class="section-title mt-4 max-w-4xl">Direct SMTP delivery from Cloudflare Workers.</h1>
		<p class="section-copy mt-5 max-w-2xl">
			@workermailer/smtp keeps SMTP inside the Worker runtime with TCP sockets, DSN support,
			lifecycle hooks, attachments, and queue helpers.
		</p>
		<div class="mt-6 flex flex-wrap gap-3">
			{#if smtp}
				<Button
					tag="a"
					href={smtp.docsHref}
					class="!rounded-full !bg-ink-950 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white dark:!bg-white dark:!text-ink-950"
				>
					<span class="inline-flex items-center gap-2">
						<Icon name="book-open" className="h-4 w-4" />
						<span>Open docs</span>
					</span>
				</Button>
				<Button
					tag="a"
					href={smtp.npmUrl}
					target="_blank"
					rel="noreferrer"
					class="!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
				>
					<span class="inline-flex items-center gap-2">
						<Icon name="package" className="h-4 w-4" />
						<span>View on npm</span>
					</span>
				</Button>
				<Button
					tag="a"
					href={smtp.githubUrl}
					target="_blank"
					rel="noreferrer"
					outline
					class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
				>
					<span class="inline-flex items-center gap-2">
						<Icon name="github" className="h-4 w-4" />
						<span>GitHub</span>
					</span>
				</Button>
			{/if}
		</div>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
		<div class="space-y-4">
			<p class="section-eyebrow">Highlights</p>
			<h2 class="section-title max-w-lg">Built for SMTP on the edge.</h2>
			<ul class="space-y-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
				<li>Cloudflare TCP sockets with SMTP auth modes.</li>
				<li>DSN, hooks, attachments, inline CID assets, and explicit errors.</li>
				<li>Queue helpers for async delivery off the request path.</li>
			</ul>
		</div>

		<div class="space-y-6">
			<CodeBlock
				code={snippets.install.code}
				language={snippets.install.language}
				filename={snippets.install.filename}
				label="Install with Bun"
			/>
			<CodeBlock
				code={snippets.quickStart.code}
				language={snippets.quickStart.language}
				filename={snippets.quickStart.filename}
				label="Quick start"
			/>
		</div>
	</div>
</section>

<section class="section-band border-y border-ink-300/80 py-12 dark:border-ink-700 md:py-16">
	<div class="site-shell grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
		<div class="space-y-4">
			<p class="section-eyebrow">Queues</p>
			<h2 class="section-title max-w-lg">Queue helpers for bursty traffic.</h2>
			<p class="section-copy">
				Move email processing into Cloudflare Queues when you need retries, backpressure, or
				batching across requests.
			</p>
		</div>
		<div>
			<CodeBlock
				code={snippets.queue.code}
				language={snippets.queue.language}
				filename={snippets.queue.filename}
				label="Queue handler"
			/>
		</div>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="surface-panel rounded-[1.75rem] p-6 sm:p-7">
		<h2 class="text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
			Need Resend instead?
		</h2>
		<p class="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
			Use the Resend library for API-based delivery with the same queue patterns.
		</p>
		<div class="mt-5 flex flex-wrap gap-3">
			<Button
				tag="a"
				href="/libs/resend"
				class="!rounded-full !bg-ink-800 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white dark:!bg-ink-50 dark:!text-ink-900"
			>
				View Resend library
			</Button>
			<Button
				tag="a"
				href={smtp?.docsHref ?? '/docs/smtp'}
				outline
				class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
			>
				<span class="inline-flex items-center gap-2">
					<Icon name="book-open" className="h-4 w-4" />
					<span>Read SMTP docs</span>
				</span>
			</Button>
		</div>
	</div>
</section>
