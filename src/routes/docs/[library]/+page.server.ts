import type { PageServerLoad } from './$types';

import { fetchGithubMarkdown, getLibraryOrThrow } from '$lib/server/github-markdown';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const library = getLibraryOrThrow(params.library);
	const { html, updatedAt } = await fetchGithubMarkdown(
		fetch,
		library.readmeUrl,
		`Unable to load the ${library.name} documentation right now.`
	);

	return {
		library,
		html,
		updatedAt
	};
};
