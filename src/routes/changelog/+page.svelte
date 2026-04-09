<script lang="ts">
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	import Seo from '$lib/components/Seo.svelte';
	import { changelogEntries } from '$lib/content/site';
</script>

<Seo
	title="Changelog"
	description="Release timeline for worker-mailer, from LogLevel export fixes to queues, hooks, validation, and Bun metadata."
	path="/changelog"
	keywords={['changelog', 'releases', 'version history']}
/>

<section class="border-b border-ink-300/80">
	<div class="site-shell py-14 md:py-16">
		<p class="section-eyebrow">Changelog</p>
		<h1 class="section-title mt-4 max-w-4xl">Release notes synced to the upstream changelog.</h1>
		<p class="section-copy mt-5">
			This page now mirrors the real `CHANGELOG.md` from the worker-mailer repository instead
			of a condensed rewrite.
		</p>
	</div>
</section>

<section class="site-shell py-12">
	<Timeline order="vertical" class="space-y-10">
		{#each changelogEntries as entry, index}
			<TimelineItem
				title={entry.version}
				date={entry.date ?? ''}
				dateFormat="full-date"
				isLast={index === changelogEntries.length - 1}
			>
				<div class="surface-panel mt-5 rounded-[1.75rem] p-6">
					<div class="flex flex-wrap items-baseline justify-between gap-3">
						<p class="text-xl font-semibold tracking-tight text-ink-800 dark:text-ink-50">
							{entry.version}
						</p>
						{#if entry.breaking.length}
							<p class="text-[0.78rem] uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
								{entry.breaking.length} breaking change{entry.breaking.length > 1 ? 's' : ''}
							</p>
						{/if}
					</div>

					{#if entry.features.length}
						<div class="mt-6">
							<p class="text-xs uppercase tracking-[0.24em] text-ink-400">Features</p>
							<ul class="mt-3 space-y-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
								{#each entry.features as feature}
									<li>{feature}</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if entry.fixes.length}
						<div class="mt-6">
							<p class="text-xs uppercase tracking-[0.24em] text-ink-400">Fixes</p>
							<ul class="mt-3 space-y-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
								{#each entry.fixes as fix}
									<li>{fix}</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if entry.breaking.length}
						<div class="mt-6">
							<p class="text-xs uppercase tracking-[0.24em] text-ink-400">Breaking changes</p>
							<ul class="mt-3 space-y-2 text-sm leading-7 text-ink-600 dark:text-ink-300">
								{#each entry.breaking as item}
									<li>{item}</li>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</TimelineItem>
		{/each}
	</Timeline>
</section>
