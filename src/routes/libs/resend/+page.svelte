<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { libraries, snippets } from '$lib/content/site';

	const resend = libraries.find((item) => item.slug === 'resend');
</script>

<Seo
	title="Resend Library"
	description="@workermailer/resend is a Resend API client for Cloudflare Workers, aligned with the SMTP package patterns."
	path="/libs/resend"
	keywords={['Resend', 'Cloudflare Workers', 'worker-mailer']}/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-12 md:py-16">
		<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">{resend?.packageName} • v{resend?.version}</p>
		<p class="section-eyebrow mt-5">Resend library</p>
		<h1 class="section-title mt-4 max-w-4xl">Resend delivery with Worker-native ergonomics.</h1>
		<p class="section-copy mt-5 max-w-2xl">
			@workermailer/resend brings the Resend API into Cloudflare Workers with the same queue and
			envelope patterns as the SMTP package.
		</p>
		<div class="mt-6 flex flex-wrap gap-3">
			{#if resend}
				<Button
					tag="a"
					href={resend.docsHref}
					class="!rounded-full !bg-ink-950 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white dark:!bg-white dark:!text-ink-950"
				>
					<span class="inline-flex items-center gap-2">
						<Icon name="book-open" className="h-4 w-4" />
						<span>Open docs</span>
					</span>
				</Button>
				<Button
					tag="a"
					href={resend.npmUrl}
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
					href={resend.githubUrl}
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
			<h2 class="section-title max-w-lg">Aligned with SMTP patterns.</h2>
			<ul class="space-y-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
				<li>Fetch-based Resend delivery, Worker compatible.</li>
				<li>Same envelope and queue helpers as @workermailer/smtp.</li>
				<li>Sandbox bundle included for EmDash provider wiring.</li>
			</ul>
		</div>

		<div class="space-y-6">
			<CodeBlock
				code={snippets.installResend.code}
				language={snippets.installResend.language}
				filename={snippets.installResend.filename}
				label="Install with Bun"
			/>
			<CodeBlock
				code={snippets.resendQuickStart.code}
				language={snippets.resendQuickStart.language}
				filename={snippets.resendQuickStart.filename}
				label="Quick start"
			/>
		</div>
	</div>
</section>

<section class="section-band border-y border-ink-300/80 py-12 dark:border-ink-700 md:py-16">
	<div class="site-shell grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
		<div class="space-y-4">
			<p class="section-eyebrow">Queues</p>
			<h2 class="section-title max-w-lg">Batch Resend deliveries with queues.</h2>
			<p class="section-copy">
				Use Cloudflare Queues to process sends out of band without changing your Resend payloads.
			</p>
		</div>
		<div>
			<CodeBlock
				code={snippets.resendQueue.code}
				language={snippets.resendQueue.language}
				filename={snippets.resendQueue.filename}
				label="Queue handler"
			/>
		</div>
	</div>
</section>

<section class="site-shell py-10 md:py-12">
	<div class="surface-panel rounded-[1.75rem] p-6 sm:p-7">
		<h2 class="text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
			Need SMTP instead?
		</h2>
		<p class="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
			Use the SMTP library for direct socket delivery, lifecycle hooks, and DSN support.
		</p>
		<div class="mt-5 flex flex-wrap gap-3">
			<Button
				tag="a"
				href="/libs/smtp"
				class="!rounded-full !bg-ink-800 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white dark:!bg-ink-50 dark:!text-ink-900"
			>
				View SMTP library
			</Button>
			<Button
				tag="a"
				href={resend?.docsHref ?? '/docs/resend'}
				outline
				class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
			>
				<span class="inline-flex items-center gap-2">
					<Icon name="book-open" className="h-4 w-4" />
					<span>Read Resend docs</span>
				</span>
			</Button>
		</div>
	</div>
</section>
