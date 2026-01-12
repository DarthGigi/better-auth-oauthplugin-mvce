import { env } from '$env/dynamic/public';
import { oauthProviderClient } from '@better-auth/oauth-provider/client';
import { createAuthClient } from 'better-auth/svelte';

const { PUBLIC_BASE_URL } = env;

export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	baseURL: PUBLIC_BASE_URL,
	plugins: [oauthProviderClient()]
});
