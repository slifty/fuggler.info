<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import SpecTable from '$lib/components/SpecTable.svelte';
	import { materials, dimensions, safety, signatureFeatures } from '$lib/data/specs';
</script>

<svelte:head>
	<title>Oogah Boogah Specifications — Fuggler Info</title>
	<meta
		name="description"
		content="Materials, dimensions, safety certifications, and signature features of the Oogah Boogah Fuggler."
	/>
</svelte:head>

<PageHero title="Specifications" subtitle="What makes an Oogah Boogah tick (and grin)" />

<section class="container">
	<SpecTable caption="Materials" rows={materials} />
	<SpecTable caption="Size Guide" rows={dimensions} />
	<SpecTable caption="Safety & Certification" rows={safety} />

	<div class="features">
		<h2>Signature Features</h2>
		<ul>
			{#each signatureFeatures as feature}
				<li>{feature}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.features {
		background: white;
		border-radius: var(--radius-md);
		padding: var(--space-lg);
		box-shadow: var(--shadow-sm);
		margin-bottom: var(--space-xl);
	}

	.features h2 {
		font-size: 1.25rem;
		color: var(--color-purple);
		margin-bottom: var(--space-md);
	}

	.features ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.features li {
		padding-left: 1.5em;
		position: relative;
		line-height: 1.6;
	}

	.features li::before {
		content: '\01F9B7';
		position: absolute;
		left: 0;
	}
</style>
