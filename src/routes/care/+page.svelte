<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import WarningBanner from '$lib/components/WarningBanner.svelte';
	import ShrinkComparison from '$lib/components/ShrinkComparison.svelte';
	import { dailyCare, storageTips } from '$lib/data/care-tips';
</script>

<svelte:head>
	<title>Oogah Boogah Care Guide — Fuggler Info</title>
	<meta
		name="description"
		content="How to care for your Oogah Boogah Fuggler, plus a critical warning about cold weather shrinking."
	/>
</svelte:head>

<PageHero title="Care Guide" subtitle="Keep your Oogah Boogah happy, clean, and the right size" />

<section class="container">
	<WarningBanner>
		<p class="warning-text">
			<strong>Do NOT leave your Fuggler in zero-degree weather for extended periods!</strong>
			Exposure to freezing temperatures (0&deg;C / 32&deg;F) for 3 or more hours causes
			<strong>significant and irreversible shrinking</strong> of the plush body. The polyester fiberfill
			contracts permanently, leaving you with a much smaller (and sadder) Fuggler.
		</p>
		<ShrinkComparison />
		<p class="warning-subtext">
			If your Fuggler has already been cold-exposed, there is no known method to restore it to its
			original size. Prevention is the only cure.
		</p>
	</WarningBanner>
</section>

<section class="container">
	<h2 class="section-heading">Daily Care</h2>
	<div class="tips-grid">
		{#each dailyCare as tip}
			<div class="tip-card">
				<h3>{tip.title}</h3>
				<ul>
					{#each tip.instructions as instruction}
						<li>{instruction}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<section class="container">
	<h2 class="section-heading">Storage Tips</h2>
	<ul class="storage-list">
		{#each storageTips as tip}
			<li>{tip}</li>
		{/each}
	</ul>
</section>

<style>
	.warning-text {
		text-align: center;
		font-size: 1.05rem;
		line-height: 1.7;
		margin-bottom: var(--space-md);
	}

	.warning-subtext {
		text-align: center;
		font-size: 0.9rem;
		color: var(--color-text-light);
		font-style: italic;
		margin-top: var(--space-md);
	}

	.section-heading {
		font-size: clamp(1.5rem, 4vw, 2rem);
		color: var(--color-purple);
		margin-bottom: var(--space-lg);
		margin-top: var(--space-lg);
	}

	.tips-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.tip-card {
		background: white;
		border-radius: var(--radius-md);
		padding: var(--space-lg);
		box-shadow: var(--shadow-sm);
	}

	.tip-card h3 {
		font-size: 1.1rem;
		color: var(--color-blue);
		margin-bottom: var(--space-sm);
	}

	.tip-card ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.tip-card li {
		padding-left: 1.25em;
		position: relative;
		line-height: 1.5;
		font-size: 0.95rem;
	}

	.tip-card li::before {
		content: '\2022';
		position: absolute;
		left: 0;
		color: var(--color-blue);
		font-weight: bold;
	}

	.storage-list {
		list-style: none;
		background: white;
		border-radius: var(--radius-md);
		padding: var(--space-lg);
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		margin-bottom: var(--space-xl);
	}

	.storage-list li {
		padding-left: 1.5em;
		position: relative;
		line-height: 1.6;
	}

	.storage-list li::before {
		content: '\1F4E6';
		position: absolute;
		left: 0;
	}
</style>
