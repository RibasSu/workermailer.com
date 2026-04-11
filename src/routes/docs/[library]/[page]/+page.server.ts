import type { PageServerLoad } from './$types';

import { getLibraryOrThrow, loadLibraryDocsPage } from '$lib/server/github-markdown';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const library = getLibraryOrThrow(params.library);
	const docsPage = await loadLibraryDocsPage(fetch, library, params.page);

	return {
		library,
		...docsPage
	};
};
