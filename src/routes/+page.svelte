<script lang="ts">
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<div class="flex min-h-screen items-center justify-center gap-4">
	{#if data.user}
		<form method="POST" action="?/logout">
			<button class="rounded-md bg-white px-4 py-2 text-black">Sign Out</button>
		</form>
	{:else}
		<form method="POST" action="?/signup">
			<button class="rounded-md bg-white px-4 py-2 text-black">Sign Up</button>
		</form>
		<form method="POST" action="?/login">
			<button class="rounded-md bg-white px-4 py-2 text-black">Sign In</button>
		</form>
	{/if}
</div>
