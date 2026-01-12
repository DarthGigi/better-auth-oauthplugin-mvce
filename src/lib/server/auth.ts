import { getRequestEvent } from '$app/server';
import { env } from '$env/dynamic/public';
import { db } from '$lib/server/db'; // your drizzle instance
import { oauthProvider } from '@better-auth/oauth-provider';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { jwt } from 'better-auth/plugins';
import { sveltekitCookies } from 'better-auth/svelte-kit';

const { PUBLIC_BASE_URL } = env;

export const auth = betterAuth({
	baseURL: PUBLIC_BASE_URL,
	disabledPaths: ['/token'],
	emailAndPassword: {
		enabled: true
	},
	user: {
		deleteUser: {
			enabled: true
		}
	},
	database: drizzleAdapter(db, {
		provider: 'sqlite' // or "mysql", "sqlite"
	}),
	plugins: [
		jwt(),
		oauthProvider({
			loginPage: '/',
			consentPage: '/consent'
			// ...other options
		}),
		sveltekitCookies(getRequestEvent) // make sure this is the last plugin in the array
	]
});
