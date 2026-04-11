<script lang="ts">
	import DocsShell from '$lib/components/DocsShell.svelte';

	let { data } = $props();
</script>

<DocsShell {...data} />
