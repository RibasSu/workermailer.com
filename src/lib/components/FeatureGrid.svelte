<script lang="ts">
	import { Card } from 'flowbite-svelte';

	import type { FeatureItem } from '$lib/content/site';

	type Props = {
		items: FeatureItem[];
	};

	let { items }: Props = $props();
</script>

<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
	{#each items as item}
		<Card class="feature-card !rounded-[1.75rem] !border !border-slate-200/70 !bg-white/80 !p-0 !shadow-none dark:!border-slate-800/80 dark:!bg-slate-950/70">
			<div class="space-y-5 p-7">
				<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-2xl">
					{item.icon}
				</div>
				<div class="space-y-3">
					<h3 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
						{item.title}
					</h3>
					<p class="text-base leading-7 text-slate-600 dark:text-slate-300">
						{item.description}
					</p>
					<p class="text-sm leading-7 text-slate-500 dark:text-slate-400">
						{item.note}
					</p>
				</div>
			</div>
		</Card>
	{/each}
</div>
