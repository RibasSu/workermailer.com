<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pipelineStages, providers, site } from '$lib/content/site';
</script>

<Seo
	title="EmDash Discussion"
	description="How worker-mailer ships EmDash-ready sandbox bundles while the public provider contract evolves."
	path="/emdash"
	keywords={['EmDash', 'email provider discussion', 'SMTP provider']}/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-14 md:py-16">
		<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">Public discussion #245</p>
		<p class="section-eyebrow mt-5">EmDash</p>
		<h1 class="section-title mt-4 max-w-4xl">Sandbox-ready bundles, plus the discussion context.</h1>
		<p class="section-copy mt-5">
			worker-mailer matters to the EmDash conversation because SMTP and Resend already run on
			Cloudflare Workers. The sandbox bundles exist today; the shared provider contract is
			still evolving. This page keeps those two realities separate.
		</p>
	</div>
</section>

<section class="site-shell py-12 md:py-16">
		<div class="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
		<div class="space-y-5">
			<p class="section-eyebrow">What is already true</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				worker-mailer already ships concrete SMTP and Resend transports.
			</h2>
			<ul class="space-y-3 text-base leading-8 text-ink-600 dark:text-ink-300">
				<li>Cloudflare Workers SMTP transport exists today.</li>
				<li>Resend delivery ships as a Worker-native API client.</li>
				<li>Queue helpers, hooks, CID images, and DSN are already part of the SMTP package API.</li>
				<li>Sandbox bundles exist for both transports so teams can test now.</li>
			</ul>
		</div>

		<div class="surface-panel rounded-[2rem] p-6 sm:p-8">
			<p class="section-eyebrow">What is still open</p>
			<ul class="mt-5 space-y-3 text-base leading-8 text-ink-600 dark:text-ink-300">
				<li>The exact provider lifecycle and registration surface in EmDash.</li>
				<li>How transport-specific configuration should be modeled across different providers.</li>
				<li>What should live in interception hooks versus provider-specific delivery hooks.</li>
				<li>How observability and post-send behavior should be normalized across transports.</li>
			</ul>
			<div class="mt-7 flex flex-wrap gap-3">
				<Button
					tag="a"
					href={site.discussionUrl}
					target="_blank"
					rel="noreferrer"
					class="!rounded-full !bg-brand-500 !px-5 !py-3 !text-sm !font-semibold !tracking-[0.16em] !text-white"
				>
					<span class="inline-flex items-center gap-2">
						<Icon name="github" className="h-4 w-4" />
						<span>Open discussion #245</span>
					</span>
				</Button>
				<Button
					tag="a"
					href={site.emdashUrl}
					target="_blank"
					rel="noreferrer"
					outline
					class="!rounded-full !border-ink-300 !px-5 !py-3 !text-sm !font-semibold !tracking-[0.16em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
				>
					<span class="inline-flex items-center gap-2">
						<Icon name="plug" className="h-4 w-4" />
						<span>Visit EmDash</span>
					</span>
				</Button>
			</div>
		</div>
	</div>
</section>

<section class="section-band border-y border-ink-300/80 py-16 dark:border-ink-700 md:py-20">
	<div class="site-shell space-y-8">
		<div class="space-y-4">
			<p class="section-eyebrow">Pipeline ideas in the thread</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				beforeSend, deliver, afterSend
			</h2>
			<p class="section-copy">
				These stages summarize the shape of the public discussion, not a finalized contract.
				They are useful because they show where a transport like worker-mailer might fit.
			</p>
		</div>

		<div class="grid gap-4 lg:grid-cols-3">
			{#each pipelineStages as stage}
				<div class="surface-panel rounded-[1.75rem] p-6">
					<p class="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-300">
						{stage.capability}
					</p>
					<h3 class="mt-3 text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-2xl">
						{stage.title}
					</h3>
					<p class="mt-4 text-sm leading-7 text-ink-600 dark:text-ink-300">
						{stage.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="site-shell py-16 md:py-20">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
		<div class="space-y-5">
			<p class="section-eyebrow">Transport status</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				What ships now versus what is still being debated
			</h2>
			<p class="section-copy">
				The distinction matters. This site documents what ships today while the EmDash contract
				matures in public.
			</p>
		</div>

		<div class="surface-panel overflow-hidden rounded-[2rem]">
			{#each providers as provider, index}
				<div class={`grid gap-3 px-5 py-5 md:grid-cols-[120px_minmax(0,1fr)] md:px-7 ${index !== 0 ? 'border-t border-ink-300/70 dark:border-ink-700' : ''}`}>
					<div class="flex items-center gap-3">
						<div class="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-[0.72rem] font-semibold tracking-[0.18em] text-brand-700 dark:border-brand-700/50 dark:bg-brand-900/30 dark:text-brand-300">
							<Icon name={provider.icon} className="h-5 w-5" />
						</div>
						<p class="text-sm font-semibold tracking-tight text-ink-800 dark:text-ink-50">
							{provider.name}
						</p>
					</div>
					<div class="space-y-2">
						<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">
							{provider.status === 'stable' ? 'Stable today' : 'Under discussion'}
						</p>
						<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">{provider.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
