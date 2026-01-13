import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
	resolve: {
		dedupe: ['better-call', 'better-auth', '@better-auth/oauth-provider']
	},
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()]
});
