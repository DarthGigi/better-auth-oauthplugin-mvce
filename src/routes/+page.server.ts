import { auth } from '$lib/server/auth';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals.user
	};
};

export const actions = {
	signup: async () => {
		await auth.api.signUpEmail({
			body: {
				name: 'John Doe', // required
				email: 'john.doe@example.com', // required
				password: 'password1234', // required
				image: 'https://example.com/image.png',
				callbackURL: 'https://example.com/callback'
			}
		});
	},
	login: async () => {
		await auth.api.signInEmail({
			body: {
				email: `john.doe@example.com`, // required
				password: 'password1234', // required
				callbackURL: 'https://example.com/callback'
			}
		});
	},
	logout: async ({ request, locals }) => {
		await auth.api.signOut({
			// This endpoint requires session cookies.
			headers: request.headers
		});

		// Clear locals on logout
		locals.session = null;
		locals.user = null;
	}
} satisfies Actions;
