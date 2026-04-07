<script lang="ts">
	import {
		Button,
		TabItem,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Tabs
	} from 'flowbite-svelte';

	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import DocsSidebar from '$lib/components/DocsSidebar.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { configRows, docsSidebar, site, snippets } from '$lib/content/site';
</script>

<Seo
	title="Documentation"
	description="Install worker-mailer with Bun or npm, send email from Cloudflare Workers, and review the current integration discussion around EmDash without guessing the API."
	path="/docs"
	keywords={['documentation', 'TypeScript', 'Cloudflare Workers SMTP']}/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-14 md:py-16">
		<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">v{site.version} • Bun recommended, npm supported</p>
		<p class="section-eyebrow mt-5">Documentation</p>
		<h1 class="section-title mt-4 max-w-4xl">Shipping SMTP from Cloudflare Workers, cleanly.</h1>
		<p class="section-copy mt-5">
			The docs below stay close to the published API: install with Bun or npm, configure
			Workers compatibility, send email, and scale into queues, hooks, and inline assets.
		</p>
	</div>
</section>

<div class="site-shell grid gap-10 py-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 lg:py-12">
	<div class="min-w-0 lg:sticky lg:top-28 lg:self-start">
		<DocsSidebar items={docsSidebar} />
	</div>

	<div class="min-w-0 space-y-14 md:space-y-16">
		<section id="introduction" class="scroll-mt-32 space-y-5">
			<p class="section-eyebrow">Introduction</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				What worker-mailer is built to do
			</h2>
			<p class="section-copy">
				worker-mailer is an SMTP client for Cloudflare Workers. It uses TCP sockets, supports
				typed message envelopes, handles HTML and attachments, and exposes queue helpers for
				when mail should leave the request path.
			</p>
			<div class="surface-panel overflow-hidden rounded-[1.75rem]">
				<div class="grid gap-0 md:grid-cols-3">
					<div class="px-5 py-5 md:px-6">
						<p class="text-sm font-semibold tracking-tight text-ink-800 dark:text-ink-50">Transactional email</p>
						<p class="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
							Forms, account notifications, and operational emails directly from a Worker.
						</p>
					</div>
					<div class="border-t border-ink-300/70 px-5 py-5 md:border-l md:border-t-0 md:px-6 dark:border-ink-700">
						<p class="text-sm font-semibold tracking-tight text-ink-800 dark:text-ink-50">Queue-backed delivery</p>
						<p class="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
							Move send work into Cloudflare Queues when throughput or latency matters.
						</p>
					</div>
					<div class="border-t border-ink-300/70 px-5 py-5 md:border-l md:border-t-0 md:px-6 dark:border-ink-700">
						<p class="text-sm font-semibold tracking-tight text-ink-800 dark:text-ink-50">Operational visibility</p>
						<p class="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">
							Hooks, DSN, and explicit errors help with retries and monitoring.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="installation" class="scroll-mt-32 space-y-5">
			<p class="section-eyebrow">Installation</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				Install with Bun or npm and enable Worker compatibility
			</h2>
			<p class="section-copy">
				Our recommendation is Bun, especially if the rest of your Worker setup already runs on
				it. If your team prefers npm, the package install is straightforward there too. Either
				way, turn on the Worker compatibility flag that the Cloudflare socket runtime needs.
			</p>
			<div class="space-y-6">
				<CodeBlock
					code={snippets.install.code}
					language={snippets.install.language}
					filename={snippets.install.filename}
					label="Recommended: Bun"
				/>
				<CodeBlock
					code={snippets.installNpm.code}
					language={snippets.installNpm.language}
					filename={snippets.installNpm.filename}
					label="Alternative: npm"
				/>
				<CodeBlock
					code={snippets.workerConfig.code}
					language={snippets.workerConfig.language}
					filename={snippets.workerConfig.filename}
					label="Worker config"
				/>
			</div>
		</section>

		<section id="quick-start" class="scroll-mt-32 space-y-5">
			<p class="section-eyebrow">Quick start</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				Connect once, or send once
			</h2>
			<p class="section-copy">
				Start with a persistent mailer when you want multiple sends on the same transport, or
				use the static helper when you just need to fire a single message and return.
			</p>
			<div class="grid min-w-0 gap-6">
				<CodeBlock
					code={snippets.quickStart.code}
					language={snippets.quickStart.language}
					filename={snippets.quickStart.filename}
					label="Persistent transport"
				/>
				<CodeBlock
					code={snippets.oneOffSend.code}
					language={snippets.oneOffSend.language}
					filename={snippets.oneOffSend.filename}
					label="One-off send"
				/>
			</div>
			<CodeBlock
				code={snippets.queue.code}
				language={snippets.queue.language}
				filename={snippets.queue.filename}
				label="Queue handler"
			/>
		</section>

		<section id="providers" class="scroll-mt-32 space-y-5">
			<p class="section-eyebrow">Providers</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				SMTP is the documented transport today
			</h2>
			<p class="section-copy">
				worker-mailer ships SMTP. Other provider names appear only in broader ecosystem
				discussions, so this site does not publish setup code for them.
			</p>

			<Tabs tabStyle="underline">
				<TabItem title="SMTP" open>
					<div class="mt-6 space-y-5">
						<p class="text-base leading-8 text-ink-600 dark:text-ink-300">
							Use worker-mailer directly when you want SMTP on Cloudflare Workers with typed
							envelopes, DSN support, attachments, lifecycle hooks, and queues.
						</p>
						<CodeBlock
							code={snippets.quickStart.code}
							language={snippets.quickStart.language}
							filename={snippets.quickStart.filename}
							label="Stable transport"
						/>
					</div>
				</TabItem>
				<TabItem title="Resend">
					<div class="mt-6 space-y-5">
						<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">Under discussion</p>
						<p class="text-base leading-8 text-ink-600 dark:text-ink-300">
							Not part of worker-mailer core. If an EmDash provider contract emerges, this
							site will document it only after the API is public and stable.
						</p>
					</div>
				</TabItem>
				<TabItem title="Postmark">
					<div class="mt-6 space-y-5">
						<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">Under discussion</p>
						<p class="text-base leading-8 text-ink-600 dark:text-ink-300">
							Not part of worker-mailer core. If an EmDash provider contract emerges, this
							site will document it only after the API is public and stable.
						</p>
					</div>
				</TabItem>
				<TabItem title="SES">
					<div class="mt-6 space-y-5">
						<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">Under discussion</p>
						<p class="text-base leading-8 text-ink-600 dark:text-ink-300">
							Not part of worker-mailer core. If an EmDash provider contract emerges, this
							site will document it only after the API is public and stable.
						</p>
					</div>
				</TabItem>
			</Tabs>
		</section>

		<section id="configuration" class="scroll-mt-32 space-y-5">
			<p class="section-eyebrow">Configuration</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				Core connection options
			</h2>
			<p class="section-copy">
				These are the fields you will tune most often in production for connection behavior,
				auth, delivery status notifications, and timeouts.
			</p>

			<div class="overflow-x-auto rounded-[1.75rem] border border-ink-300/80 dark:border-ink-700">
				<Table hoverable>
					<TableHead>
						<TableHeadCell>Option</TableHeadCell>
						<TableHeadCell>Type</TableHeadCell>
						<TableHeadCell>Default</TableHeadCell>
						<TableHeadCell>Description</TableHeadCell>
					</TableHead>
					<TableBody class="divide-y divide-ink-300/70 dark:divide-ink-700">
						{#each configRows as row}
							<TableBodyRow>
								<TableBodyCell class="font-mono text-xs text-ink-800 dark:text-ink-100">
									{row.option}
								</TableBodyCell>
								<TableBodyCell>{row.type}</TableBodyCell>
								<TableBodyCell>{row.defaultValue}</TableBodyCell>
								<TableBodyCell>{row.description}</TableBodyCell>
							</TableBodyRow>
						{/each}
					</TableBody>
				</Table>
			</div>
		</section>

		<section id="emdash-discussion" class="scroll-mt-32 space-y-5">
			<p class="section-eyebrow">EmDash discussion</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				What this site is willing to say today
			</h2>
			<p class="section-copy">
				worker-mailer is relevant to the EmDash email-provider conversation because it already
				solves SMTP on Cloudflare Workers. Beyond that, the integration surface is still being
				discussed publicly, so this site avoids publishing guessed implementation details.
			</p>
			<div class="surface-panel rounded-[1.75rem] p-6 sm:p-7">
				<ul class="space-y-3 text-base leading-8 text-ink-600 dark:text-ink-300">
					<li>This site documents the current worker-mailer API, not a speculative EmDash plugin API.</li>
					<li>The dedicated EmDash page summarizes the public discussion themes and open questions.</li>
					<li>When the integration direction is final, the docs can grow from there with real examples.</li>
				</ul>
				<div class="mt-7 flex flex-wrap gap-3">
					<Button
						tag="a"
						href="/emdash"
						class="!rounded-full !bg-brand-500 !px-5 !py-3 !text-sm !font-semibold !tracking-[0.16em] !text-white"
					>
						Read the summary
					</Button>
					<Button
						tag="a"
						href={site.discussionUrl}
						target="_blank"
						rel="noreferrer"
						outline
						class="!rounded-full !border-ink-300 !px-5 !py-3 !text-sm !font-semibold !tracking-[0.16em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						Open discussion #245
					</Button>
				</div>
			</div>
		</section>

		<section id="api-reference" class="scroll-mt-32 space-y-5">
			<p class="section-eyebrow">API reference</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				Transport options and message options
			</h2>
			<p class="section-copy">
				`WorkerMailer.connect()` controls transport behavior. `mailer.send()` controls the
				message envelope, content, headers, and optional DSN overrides.
			</p>
			<div class="grid min-w-0 gap-6">
				<CodeBlock
					code={snippets.apiConnect.code}
					language={snippets.apiConnect.language}
					filename={snippets.apiConnect.filename}
					label="Transport options"
				/>
				<CodeBlock
					code={snippets.apiSend.code}
					language={snippets.apiSend.language}
					filename={snippets.apiSend.filename}
					label="Message options"
				/>
			</div>
			<div class="grid min-w-0 gap-6">
				<CodeBlock
					code={snippets.cidTemplate.code}
					language={snippets.cidTemplate.language}
					filename={snippets.cidTemplate.filename}
					label="Inline image"
				/>
				<CodeBlock
					code={snippets.hooks.code}
					language={snippets.hooks.language}
					filename={snippets.hooks.filename}
					label="Lifecycle hooks"
				/>
			</div>
		</section>
	</div>
</div>
