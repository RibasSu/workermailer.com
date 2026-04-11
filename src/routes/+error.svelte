<script lang="ts">
	import { page } from '$app/state';
	import { Button } from 'flowbite-svelte';

	import Icon from '$lib/components/Icon.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { error, status } = $props();

	const title = $derived(status === 404 ? 'Page not found' : 'Something went wrong');
	const copy = $derived(
		status === 404
			? 'The page you asked for does not exist, moved, or was never published.'
			: 'The site hit an unexpected problem while loading this page. The safest next move is to go back to a stable route.'
	);
	const icon = $derived(status === 404 ? 'search' : 'alert');
	const statusLabel = $derived(status === 404 ? '404' : '500');
	const message = $derived(typeof error === 'object' && error && 'message' in error ? String(error.message) : '');
</script>

<Seo
	title={title}
	description={copy}
	path={page.url.pathname}
	keywords={['error', '404', '500', 'worker-mailer']}
/>

<section class="site-shell py-16 md:py-24">
	<div class="surface-panel mx-auto max-w-4xl rounded-[2.2rem] p-8 sm:p-10">
		<div class="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-center">
			<div class="space-y-4">
				<div class="flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-brand-500/25 bg-brand-500/10 text-brand-700 dark:text-brand-200">
					<Icon name={icon} className="h-8 w-8" />
				</div>
				<p class="text-[0.72rem] uppercase tracking-[0.18em] text-ink-500">HTTP {statusLabel}</p>
			</div>

			<div class="space-y-5">
				<h1 class="text-3xl font-semibold tracking-tight text-ink-800 dark:text-ink-50 md:text-5xl">
					{title}
				</h1>
				<p class="max-w-2xl text-sm leading-7 text-ink-600 dark:text-ink-300">
					{copy}
				</p>

				{#if message && status !== 404}
					<p class="rounded-[1.25rem] border border-brand-500/25 bg-brand-500/10 px-4 py-3 text-sm leading-7 text-ink-800 dark:text-ink-50">
						{message}
					</p>
				{/if}

				<div class="flex flex-wrap gap-3">
					<Button
						tag="a"
						href="/"
						class="!rounded-full !bg-brand-500 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-white hover:!bg-brand-300"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="home" className="h-4 w-4" />
							<span>Go home</span>
						</span>
					</Button>
					<Button
						tag="a"
						href="/docs"
						outline
						class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="book-open" className="h-4 w-4" />
							<span>Open docs</span>
						</span>
					</Button>
					<Button
						tag="a"
						href="/libs"
						outline
						class="!rounded-full !border-ink-300 !px-5 !py-2.5 !text-sm !font-semibold !tracking-[0.08em] !text-ink-800 dark:!border-ink-700 dark:!text-ink-50"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="library" className="h-4 w-4" />
							<span>Browse libraries</span>
						</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
