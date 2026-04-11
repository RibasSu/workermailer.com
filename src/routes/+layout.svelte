<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { page } from '$app/state';

	import Icon from '$lib/components/Icon.svelte';
	import LogoMark from '$lib/components/LogoMark.svelte';
	import { navigation, site } from '$lib/content/site';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let currentPath = $derived(page.url.pathname);
	let isDark = $state(false);

	function applyTheme(nextDark: boolean) {
		isDark = nextDark;
		document.documentElement.classList.toggle('dark', nextDark);
		localStorage.setItem('theme', nextDark ? 'dark' : 'light');
	}

	function toggleTheme() {
		applyTheme(!isDark);
	}

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		applyTheme(storedTheme ? storedTheme === 'dark' : prefersDark);
	});
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
							Cloudflare Workers Email
						</span>
					</span>
				</NavBrand>

				<div class="flex items-center gap-2 md:order-2">
					<button
						type="button"
						onclick={toggleTheme}
						aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
						class="icon-button"
					>
						<Icon name={isDark ? 'sun' : 'moon'} className="h-[1.1rem] w-[1.1rem]" />
					</button>
					<a
						href={site.githubUrl}
						target="_blank"
						rel="noreferrer"
						aria-label="View worker-mailer on GitHub"
						class="icon-button"
					>
						<Icon name="github" className="h-[1.1rem] w-[1.1rem]" />
					</a>
					<NavHamburger
						class="rounded-full border border-ink-300 bg-ink-50 text-ink-700 shadow-none dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 md:!hidden [&>button]:!h-10 [&>button]:!w-10"
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
						<NavLi href={item.href}>
							<span class="inline-flex items-center gap-2">
								<Icon name={item.icon} className="h-4 w-4 shrink-0" />
								<span>{item.label}</span>
							</span>
						</NavLi>
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
							SMTP and Resend delivery for Cloudflare Workers, built for Bun-first teams.
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
							<a href={item.href} class="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-300">
								<Icon name={item.icon} className="h-4 w-4 shrink-0" />
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
							class="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-300"
						>
							<Icon name="package" className="h-4 w-4 shrink-0" />
							View on npm
						</a>
					</li>
					<li>
						<a
							href={site.githubUrl}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-300"
						>
							<Icon name="github" className="h-4 w-4 shrink-0" />
							GitHub repository
						</a>
					</li>
					<li>
						<a
							href={site.discussionUrl}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-300"
						>
							<Icon name="plug" className="h-4 w-4 shrink-0" />
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
