<script lang="ts">
	import { site } from '$lib/content/site';

	type Props = {
		title: string;
		description: string;
		path: string;
		keywords?: string[];
		image?: string;
	};

	let { title, description, path, keywords = [], image = site.ogImage }: Props = $props();

	let fullTitle = $derived(title === site.name ? title : `${title} | ${site.name}`);
	let canonical = $derived(new URL(path, site.url).toString());
	let socialImage = $derived(image.startsWith('http') ? image : new URL(image, site.url).toString());
	let keywordList = $derived(
		['worker-mailer', 'Cloudflare Workers', 'SMTP', 'Bun', 'EmDash CMS', ...keywords].join(', ')
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywordList} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={socialImage} />
	<meta property="og:image:type" content="image/svg+xml" />
	<meta property="og:image:alt" content="worker-mailer official website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={socialImage} />
</svelte:head>
