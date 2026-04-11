<script lang="ts">
	import { Clipboard } from 'flowbite-svelte';

	import { highlightCode } from '$lib/utils/highlight';

	type Props = {
		code: string;
		language: string;
		filename?: string;
		label?: string;
	};

	let { code, language, filename, label }: Props = $props();

	let highlighted = $derived(highlightCode(code, language));
	let languageLabel = $derived(language.toUpperCase());
</script>

<div class="code-block-shell min-w-0 w-full max-w-full">
	<div class="flex flex-col gap-3 border-b border-white/10 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
		<div class="flex min-w-0 flex-wrap items-center gap-2">
			{#if filename}
				<span class="max-w-full truncate rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-white">
					{filename}
				</span>
			{/if}
			<span class="rounded-full bg-brand-500/20 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-brand-50">
				{label ?? languageLabel}
			</span>
		</div>

		<Clipboard
			value={code}
			class="!self-start !rounded-full !border !border-white/10 !bg-white/10 !px-3 !py-2 !text-[0.7rem] !font-semibold !tracking-[0.16em] !text-white transition hover:!bg-white/20 sm:!self-auto sm:!text-xs"
			aria-label="Copy code snippet"
		>
			{#snippet children(success)}
				<span>{success ? 'COPIED' : 'COPY'}</span>
			{/snippet}
		</Clipboard>
	</div>

	<pre class="overflow-x-auto overscroll-x-contain px-3 py-4 text-[0.76rem] leading-6 text-white sm:px-4 sm:py-5 sm:text-sm sm:leading-7"><code class={`hljs language-${language}`}>{@html highlighted}</code></pre>
</div>
