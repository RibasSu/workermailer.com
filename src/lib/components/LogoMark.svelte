<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className = 'h-8 w-8' }: Props = $props();
</script>

<svg
	viewBox="0 0 64 64"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={`text-ink-950 dark:text-ink-50 ${className}`}
	aria-hidden="true"
>
	<rect x="7" y="7" width="50" height="50" rx="16" fill="#F48120" />
	<path
		d="M41.5 11H47C51.4183 11 55 14.5817 55 19V24.5L41.5 11Z"
		fill="#3B82F6"
		fill-opacity="0.92"
	/>
	<path
		d="M18 24.5C18 22.567 19.567 21 21.5 21H42.5C44.433 21 46 22.567 46 24.5V39.5C46 41.433 44.433 43 42.5 43H21.5C19.567 43 18 41.433 18 39.5V24.5Z"
		fill="#FFF8EE"
		stroke="#C45C0A"
		stroke-width="2"
	/>
	<path
		d="M21 25L32 33L43 25"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M42 18.5L34.5 31.5H39.5L30 45"
		stroke="#3B82F6"
		stroke-width="3"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
