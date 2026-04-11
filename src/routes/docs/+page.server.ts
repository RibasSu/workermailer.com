import type { PageServerLoad } from './$types';

import { libraries } from '$lib/content/site';
import { fetchLibraryDocsManifest } from '$lib/server/github-markdown';

export const load: PageServerLoad = async ({ fetch }) => {
	const docsLibraries = await Promise.all(
		libraries.map(async (library) => ({
			library,
			manifest: await fetchLibraryDocsManifest(fetch, library)
		}))
	);

	return {
		docsLibraries
	};
};
