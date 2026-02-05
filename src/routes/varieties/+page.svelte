<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import VarietyCard from '$lib/components/VarietyCard.svelte';
	import { varieties } from '$lib/data/varieties';
</script>

<svelte:head>
	<title>Oogah Boogah Varieties — Fuggler Info</title>
	<meta
		name="description"
		content="Explore the 6 Oogah Boogah Fuggler varieties: Baby Fugg, Mini Rascals, Fugglow, Lab Misfits, Misfit Monsters, and Old Fogies."
	/>
</svelte:head>

<PageHero
	title="Oogah Boogah Varieties"
	subtitle="Six lines of toothy misfits, each weirder than the last"
/>

<section class="container">
	<div class="grid">
		{#each varieties as variety}
			<VarietyCard {variety} />
		{/each}
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}
</style>
