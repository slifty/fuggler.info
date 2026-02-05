<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import FeatureDiagram from '$lib/components/FeatureDiagram.svelte';
</script>

<svelte:head>
	<title>Fuggler Info — Meet the Oogah Boogah</title>
	<meta
		name="description"
		content="Everything you need to know about the Fuggler Oogah Boogah — the ugly-cute stuffed toy with human teeth."
	/>
</svelte:head>

<PageHero
	title="Meet the Fuggler"
	subtitle="The ugly-cute stuffed toy that's all teeth and charm"
/>

<section class="container">
	<div class="intro">
		<h2>What is an Oogah Boogah?</h2>
		<p>
			The <strong>Oogah Boogah</strong> is one of the most popular characters in the Fuggler lineup —
			a delightfully weird plush toy made by ZURU. With its rainbow-colored body, mismatched button eyes,
			and unmistakable set of human-like teeth, the Oogah Boogah walks the line between adorable and unsettling
			in the best possible way.
		</p>
		<p>
			Fugglers were originally created by artist Mrs McGettrick as handmade oddities before ZURU
			brought them to toy shelves worldwide. The Oogah Boogah captures the spirit of the original
			perfectly: quirky, huggable, and impossible to ignore.
		</p>
	</div>
</section>

<section class="container">
	<FeatureDiagram />
</section>

<section class="container">
	<h2 class="section-title">Explore More</h2>
	<div class="nav-cards">
		<a href="/varieties/" class="nav-card" style="border-color: var(--color-pink);">
			<h3>Varieties</h3>
			<p>
				Discover the 6 different Oogah Boogah lines, from tiny Mini Rascals to big Misfit Monsters.
			</p>
		</a>
		<a href="/specs/" class="nav-card" style="border-color: var(--color-blue);">
			<h3>Specs</h3>
			<p>Materials, dimensions, safety certifications, and signature features.</p>
		</a>
		<a href="/care/" class="nav-card" style="border-color: var(--color-orange);">
			<h3>Care</h3>
			<p>Cleaning tips, storage advice, and an important warning about cold weather.</p>
		</a>
	</div>
</section>

<style>
	.intro {
		max-width: 700px;
		margin: 0 auto var(--space-lg);
		text-align: center;
	}

	.intro h2 {
		font-size: clamp(1.5rem, 4vw, 2rem);
		color: var(--color-purple);
		margin-bottom: var(--space-md);
	}

	.intro p {
		margin-bottom: var(--space-md);
		color: var(--color-text-light);
		line-height: 1.7;
	}

	.section-title {
		text-align: center;
		font-size: clamp(1.5rem, 4vw, 2rem);
		color: var(--color-purple);
		margin-bottom: var(--space-lg);
		margin-top: var(--space-xl);
	}

	.nav-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.nav-card {
		display: block;
		padding: var(--space-lg);
		background: white;
		border-radius: var(--radius-md);
		border-left: 5px solid;
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.nav-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
	}

	.nav-card h3 {
		font-size: 1.25rem;
		color: var(--color-text);
		margin-bottom: var(--space-sm);
	}

	.nav-card p {
		font-size: 0.95rem;
		color: var(--color-text-light);
		line-height: 1.5;
	}
</style>
