<script lang="ts">
	import { Button } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/content/site';
</script>

<Seo
	title="Credits"
	description="Credit for the initial implementation goes to the original worker-mailer library and repository by zou-yu."
	path="/credits"
	keywords={['credits', 'attribution', 'worker-mailer original library']}
/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-14 md:py-16">
		<p class="text-[0.78rem] uppercase tracking-[0.18em] text-ink-500">Open source attribution</p>
		<p class="section-eyebrow mt-5">Credits</p>
		<h1 class="section-title mt-4 max-w-4xl">The original implementation credit belongs to the first worker-mailer project.</h1>
		<p class="section-copy mt-5 max-w-3xl">
			This project includes its own improvements, packaging, docs, branding, and ongoing work,
			but the initial implementation and original public package deserve direct credit to
			<a
				href={site.originalGithubUrl}
				target="_blank"
				rel="noreferrer"
				class="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 transition hover:text-brand-600 dark:text-brand-300 dark:decoration-brand-600"
			>
				{site.originalAuthor}
			</a>
			and the original
			<a
				href={site.originalNpmUrl}
				target="_blank"
				rel="noreferrer"
				class="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 transition hover:text-brand-600 dark:text-brand-300 dark:decoration-brand-600"
			>
				worker-mailer
			</a>
			release.
		</p>
	</div>
</section>

<section class="site-shell py-12 md:py-16">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
		<div class="space-y-5">
			<p class="section-eyebrow">What is being credited</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				The starting point came from the original package and repository.
			</h2>
			<p class="section-copy">
				The original project introduced an SMTP client for Cloudflare Workers built on
				Cloudflare TCP sockets and published it under the MIT license. That initial work is
				the foundation this project acknowledges here.
			</p>
		</div>

		<div class="surface-panel rounded-[2rem] p-6 sm:p-8">
			<div class="grid gap-6 md:grid-cols-2">
				<div class="space-y-3">
					<p class="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
						Original npm package
					</p>
					<h3 class="text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
						worker-mailer
					</h3>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">
						The public package that first shipped the Cloudflare Workers SMTP implementation.
					</p>
					<Button
						tag="a"
						href={site.originalNpmUrl}
						target="_blank"
						rel="noreferrer"
						class="!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="package" className="h-4 w-4" />
							<span>Open npm package</span>
						</span>
					</Button>
				</div>

				<div class="space-y-3">
					<p class="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
						Original repository
					</p>
					<h3 class="text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
						zou-yu/worker-mailer
					</h3>
					<p class="text-sm leading-7 text-ink-600 dark:text-ink-300">
						The source repository for the original implementation, published with the MIT
						license and maintained in public.
					</p>
					<Button
						tag="a"
						href={site.originalGithubUrl}
						target="_blank"
						rel="noreferrer"
						outline
						class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="github" className="h-4 w-4" />
							<span>Open GitHub repository</span>
						</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-band border-y border-ink-300/80 py-16 dark:border-ink-700 md:py-20">
	<div class="site-shell grid gap-8 lg:grid-cols-2">
		<div class="space-y-5">
			<p class="section-eyebrow">How this project relates</p>
			<h2 class="text-2xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-3xl">
				Improvements here do not replace the original attribution.
			</h2>
			<p class="section-copy">
				This site and package can add maintenance, documentation, release work, branding, or
				new improvements over time. None of that changes who should receive credit for the
				initial implementation that started the project line.
			</p>
		</div>

		<div class="surface-panel rounded-[2rem] p-6 sm:p-8">
			<ul class="space-y-3 text-base leading-8 text-ink-600 dark:text-ink-300">
				<li>The original SMTP implementation credit goes to the first worker-mailer project.</li>
				<li>The original npm package and repository links are kept here on purpose, not as a footnote.</li>
				<li>Subsequent improvements can be recognized without erasing the original authorship.</li>
			</ul>
		</div>
	</div>
</section>
