<script lang="ts">
	type IconDefinition = {
		strokes?: string[];
		fills?: string[];
	};

	type Props = {
		name: string;
		title?: string;
		className?: string;
	};

	const icons: Record<string, IconDefinition> = {
		home: {
			strokes: ['M3 10.5 12 3l9 7.5', 'M5.5 9.5V20h13V9.5', 'M9.5 20v-5h5v5']
		},
		'book-open': {
			strokes: ['M4 5.5C4 4.12 5.12 3 6.5 3H20v16H7a3 3 0 0 0-3 3', 'M20 3v16', 'M7 7h9', 'M7 11h9']
		},
		library: {
			strokes: ['M4 20V8', 'M9 20V4', 'M15 20V6', 'M20 20V10', 'M2.5 20h19']
		},
		terminal: {
			strokes: ['M4 6h16v12H4z', 'M8 10l2 2-2 2', 'M12.5 15h3.5']
		},
		clock: {
			strokes: ['M12 7.5v5l3 2', 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z']
		},
		heart: {
			strokes: ['M12 20.5 4.8 13.7a4.7 4.7 0 0 1 0-6.7 4.8 4.8 0 0 1 6.8 0L12 7.4l.4-.4a4.8 4.8 0 0 1 6.8 0 4.7 4.7 0 0 1 0 6.7Z']
		},
		plug: {
			strokes: ['M9 3v6', 'M15 3v6', 'M7 9h10v2a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5Z', 'M12 16v5']
		},
		server: {
			strokes: ['M4 5.5h16v5H4z', 'M4 13.5h16v5H4z', 'M7 8h.01', 'M7 16h.01', 'M10 8h7', 'M10 16h7']
		},
		'paper-plane': {
			strokes: ['M3 11.5 20.5 4 14 20l-2.8-5.2L3 11.5Z', 'M11.2 14.8 20.5 4']
		},
		shield: {
			strokes: ['M12 3 5 6v5c0 4.4 2.9 7.9 7 10 4.1-2.1 7-5.6 7-10V6l-7-3Z', 'm9.5 12 1.7 1.7L15 10']
		},
		image: {
			strokes: ['M4 5h16v14H4z', 'm8 11 2.5 3 2-2 3.5 4', 'M9 9h.01']
		},
		radar: {
			strokes: ['M12 12 17 7', 'M12 12a3 3 0 1 1-3-3', 'M12 12a7 7 0 1 0-7-7', 'M12 12a10 10 0 1 0-10-10']
		},
		layers: {
			strokes: ['M12 4 4 8l8 4 8-4-8-4Z', 'm4 12 8 4 8-4', 'm4 4 8 4 8-4']
		},
		bolt: {
			strokes: ['M13 2 5 13h5l-1 9 8-11h-5Z']
		},
		package: {
			strokes: ['M12 3 4 7v10l8 4 8-4V7l-8-4Z', 'M4 7l8 4 8-4', 'M12 11v10']
		},
		github: {
			fills: [
				'M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.38 6.84 9.74.5.1.68-.22.68-.5 0-.25-.01-1.08-.02-1.95-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.74 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.82c.85 0 1.71.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.21 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.84-4.57 5.1.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.28 10.28 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z'
			]
		},
		sun: {
			strokes: ['M12 2.5v2.5', 'M12 19v2.5', 'M4.9 4.9 6.7 6.7', 'M17.3 17.3l1.8 1.8', 'M2.5 12H5', 'M19 12h2.5', 'M4.9 19.1l1.8-1.8', 'M17.3 6.7l1.8-1.8', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z']
		},
		moon: {
			strokes: ['M20 14.2A7.5 7.5 0 1 1 9.8 4 6.2 6.2 0 0 0 20 14.2Z']
		},
		link: {
			strokes: ['M10 14 14 10', 'M7.5 16.5H6A3.5 3.5 0 0 1 6 9h1.5', 'M16.5 7.5H18A3.5 3.5 0 0 1 18 15h-1.5']
		},
		search: {
			strokes: ['M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z', 'm20 20-4.2-4.2']
		},
		alert: {
			strokes: ['M12 3 2.8 19h18.4L12 3Z', 'M12 9v5', 'M12 17h.01']
		},
		'arrow-right': {
			strokes: ['M5 12h14', 'm13-5 5 5-5 5']
		},
		code: {
			strokes: ['m9 18-6-6 6-6', 'm15 6 6 6-6 6']
		},
		wrench: {
			strokes: ['M14 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5A4 4 0 0 0 17.5 10l-2-2 2.5-2.5A4 4 0 0 0 14 6.5Z']
		},
		download: {
			strokes: ['M12 3v11', 'm7-4-7 7-7-7', 'M4 20h16']
		},
		mail: {
			strokes: ['M3 6h18v12H3z', 'm4 3.5 5 4 3-2.4 3 2.4 5-4']
		},
		cloud: {
			strokes: ['M8 18H7a4 4 0 1 1 .8-7.9A5.5 5.5 0 0 1 18 8a4 4 0 1 1 0 10h-2']
		},
		refresh: {
			strokes: ['M20 12a8 8 0 0 0-14.3-4.9', 'M3 4v5h5', 'M4 12a8 8 0 0 0 14.3 4.9', 'M21 20v-5h-5']
		}
	};

	let { name, title, className = 'h-5 w-5' }: Props = $props();

	let icon = $derived(icons[name] ?? icons.package);
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	stroke-width="1.8"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
	aria-hidden={title ? undefined : 'true'}
	role={title ? 'img' : undefined}
>
	{#if title}
		<title>{title}</title>
	{/if}

	{#each icon.strokes ?? [] as path}
		<path d={path} stroke="currentColor" />
	{/each}

	{#each icon.fills ?? [] as path}
		<path d={path} fill="currentColor" />
	{/each}
</svg>
