<script lang="ts">
	import { page } from '$app/state';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';

	import type { SidebarLink } from '$lib/content/site';

	type Props = {
		items: SidebarLink[];
	};

	let { items }: Props = $props();

	let currentHash = $derived(page.url.hash || items[0]?.href || '');
</script>

<div class="min-w-0 w-full space-y-5">
	<nav class="flex max-w-full gap-2 overflow-x-auto pb-1 lg:hidden" aria-label="Documentation sections">
		{#each items as item}
			<a
				href={item.href}
				class={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
					currentHash === item.href
						? 'bg-brand-500 text-white'
						: 'bg-white/80 text-ink-700 dark:bg-ink-950/80 dark:text-ink-300'
				}`}
			>
				{item.label}
			</a>
		{/each}
	</nav>

	<Sidebar
		position="static"
		disableBreakpoints
		backdrop={false}
		ariaLabel="Documentation navigation"
		class="!hidden !w-full !rounded-[1.75rem] !border !border-ink-300/80 !bg-white/82 !shadow-none dark:!border-ink-700 dark:!bg-ink-950/78 lg:!block"
		classes={{ div: '!bg-transparent !px-3 !py-3' }}
	>
		<SidebarWrapper class="space-y-3">
			<div class="rounded-[1.35rem] border border-ink-300/80 bg-brand-50/70 px-4 py-4 dark:border-ink-700 dark:bg-brand-900/18">
				<p class="section-eyebrow">Docs</p>
				<h2 class="mt-3 text-lg font-semibold tracking-tight text-ink-800 dark:text-ink-50">
					Start with SMTP.
				</h2>
			</div>

			<SidebarGroup class="space-y-1">
				{#each items as item}
					<SidebarItem
						href={item.href}
						label={item.label}
						active={currentHash === item.href}
						class="rounded-2xl"
						aClass="rounded-2xl"
					/>
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</div>
