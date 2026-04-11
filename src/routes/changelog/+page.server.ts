import type { PageServerLoad } from './$types';

import { libraries } from '$lib/content/site';
import {
	fetchGithubMarkdown,
	getDefaultLibrarySlug,
	getLibraryOrThrow
} from '$lib/server/github-markdown';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const selectedSlug = getDefaultLibrarySlug(url.searchParams.get('lib'));
	const selectedLibrary = getLibraryOrThrow(selectedSlug);
	const { html, updatedAt } = await fetchGithubMarkdown(
		fetch,
		selectedLibrary.changelogUrl,
		`Unable to load the ${selectedLibrary.name} changelog right now.`
	);

	return {
		libraries,
		selectedLibrary,
		html,
		updatedAt
	};
};
