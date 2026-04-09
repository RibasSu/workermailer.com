<script lang="ts">
	import './layout.css';
	import { DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { page } from '$app/state';

	import LogoMark from '$lib/components/LogoMark.svelte';
	import { navigation, site } from '$lib/content/site';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let currentPath = $derived(page.url.pathname);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen">
	<header class="sticky top-0 z-50 border-b border-ink-300/90 bg-white dark:border-ink-700 dark:bg-ink-950">
		<div class="site-shell">
			<Navbar fluid class="!bg-transparent !px-0 !py-2 md:!py-2.5" navContainerClass="!px-0">
				<NavBrand href="/" class="gap-2 !no-underline">
					<LogoMark class="h-8 w-8 shrink-0 md:h-9 md:w-9" />
					<span class="flex flex-col">
						<span class="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300 md:text-[0.8rem]">
							worker-mailer
						</span>
						<span class="hidden text-[0.68rem] text-ink-500 dark:text-ink-400 lg:block">
							Cloudflare Workers SMTP
						</span>
					</span>
				</NavBrand>

				<div class="flex items-center gap-2 md:order-2">
					<DarkMode
						class="rounded-full border border-ink-300 bg-ink-50 text-ink-700 shadow-none dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 [&>button]:!h-9 [&>button]:!w-9"
					/>
					<a
						href={site.githubUrl}
						target="_blank"
						rel="noreferrer"
						aria-label="View worker-mailer on GitHub"
						class="flex h-9 w-9 items-center justify-center rounded-full border border-ink-300 bg-ink-50 text-ink-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:hover:border-brand-400 dark:hover:text-brand-200"
					>
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
							<path
								d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.38 6.84 9.74.5.1.68-.22.68-.5 0-.25-.01-1.08-.02-1.95-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.74 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.82c.85 0 1.71.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.21 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.84-4.57 5.1.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.28 10.28 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
							/>
						</svg>
					</a>
					<NavHamburger
						class="rounded-full border border-ink-300 bg-ink-50 text-ink-700 shadow-none dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 md:!hidden [&>button]:!h-9 [&>button]:!w-9"
					/>
				</div>

				<NavUl
					activeUrl={currentPath}
					class="!mt-3 !rounded-[1.15rem] !border !border-ink-300 !bg-white !p-1.5 dark:!border-ink-700 dark:!bg-ink-950 md:!mt-0 md:!border-0 md:!bg-transparent md:!p-0 md:!text-sm"
					classes={{
						active:
							'!bg-brand-50 !text-brand-700 dark:!bg-brand-900/30 dark:!text-brand-100 md:!bg-transparent',
						nonActive: '!text-ink-600 dark:!text-ink-300'
					}}
				>
					{#each navigation as item}
						<NavLi href={item.href}>{item.label}</NavLi>
					{/each}
				</NavUl>
			</Navbar>
		</div>
	</header>

	<main>{@render children()}</main>

	<footer class="border-t border-ink-300/90 bg-ink-50 dark:border-ink-700 dark:bg-ink-950">
		<div class="site-shell grid gap-10 py-10 lg:grid-cols-[1.15fr_0.8fr_0.8fr]">
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<LogoMark class="h-10 w-10" />
					<div>
						<p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">
							worker-mailer
						</p>
						<p class="text-sm text-ink-500 dark:text-ink-400">
							SMTP delivery for Cloudflare Workers, built for Bun-first teams.
						</p>
					</div>
				</div>

				<p class="max-w-xl text-sm leading-7 text-ink-600 dark:text-ink-300">
					The site ships with SvelteKit, Flowbite Svelte, Tailwind CSS, and the official
					Cloudflare Workers adapter.
				</p>

			</div>

			<div>
				<p class="section-eyebrow">Navigate</p>
				<ul class="mt-4 space-y-3 text-sm text-ink-600 dark:text-ink-300">
					{#each navigation as item}
						<li>
							<a href={item.href} class="transition hover:text-brand-600 dark:hover:text-brand-300">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<p class="section-eyebrow">Project</p>
				<ul class="mt-4 space-y-3 text-sm text-ink-600 dark:text-ink-300">
					<li>
						<a
							href={site.npmUrl}
							target="_blank"
							rel="noreferrer"
							class="transition hover:text-brand-600 dark:hover:text-brand-300"
						>
							View on npm
						</a>
					</li>
					<li>
						<a
							href={site.githubUrl}
							target="_blank"
							rel="noreferrer"
							class="transition hover:text-brand-600 dark:hover:text-brand-300"
						>
							GitHub repository
						</a>
					</li>
					<li>
						<a
							href={site.discussionUrl}
							target="_blank"
							rel="noreferrer"
							class="transition hover:text-brand-600 dark:hover:text-brand-300"
						>
							EmDash discussion
						</a>
					</li>
				</ul>

				<p class="mt-5 text-xs uppercase tracking-[0.24em] text-ink-400">
					MIT licensed. Edge-native by design.
				</p>
			</div>
		</div>
	</footer>
</div>
