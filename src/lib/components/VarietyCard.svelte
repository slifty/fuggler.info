<script lang="ts">
	import type { Variety } from '$lib/data/varieties';

	interface Props {
		variety: Variety;
	}

	let { variety }: Props = $props();
</script>

<article class="card">
	<div class="card-header" style="background-color: {variety.accentColor};">
		<h3>{variety.name}</h3>
		<span class="size-badge">{variety.size}</span>
	</div>
	<div class="card-body">
		<p>{variety.description}</p>
		<p class="key-feature"><strong>Key feature:</strong> {variety.keyFeature}</p>
		<div class="tags">
			{#each variety.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</article>

<style>
	.card {
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-md);
		background: white;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.card-header {
		padding: var(--space-md);
		color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-sm);
	}

	h3 {
		font-size: 1.2rem;
		margin: 0;
	}

	.size-badge {
		font-size: 0.75rem;
		font-weight: 700;
		background: rgba(255, 255, 255, 0.25);
		padding: 2px 10px;
		border-radius: 999px;
		white-space: nowrap;
	}

	.card-body {
		padding: var(--space-md);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.key-feature {
		font-size: 0.9rem;
		color: var(--color-text-light);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin-top: var(--space-xs);
	}

	.tag {
		font-size: 0.75rem;
		background: #f0e6ff;
		color: var(--color-purple);
		padding: 2px 8px;
		border-radius: 999px;
		font-weight: 600;
	}
</style>
