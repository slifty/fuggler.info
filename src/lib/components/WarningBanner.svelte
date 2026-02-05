<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="warning" role="alert">
	<h2 class="warning-heading">CRITICAL WARNING</h2>
	{@render children()}
</div>

<style>
	.warning {
		border: 4px solid var(--color-warning-red);
		border-radius: var(--radius-md);
		background: var(--color-warning-bg);
		padding: var(--space-lg);
		margin: var(--space-lg) 0;
		animation: pulse-glow 2s ease-in-out infinite;
	}

	.warning-heading {
		color: var(--color-warning-red);
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: var(--space-md);
	}

	@keyframes pulse-glow {
		0%,
		100% {
			box-shadow: 0 0 8px rgba(231, 76, 60, 0.3);
		}
		50% {
			box-shadow: 0 0 24px rgba(231, 76, 60, 0.6);
		}
	}
</style>
