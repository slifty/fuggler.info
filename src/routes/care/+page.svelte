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
	<h2 class="section-heading">Safe Play</h2>
	<div class="play-ideas">
		<div class="play-card">
			<h3>Puppet Shows</h3>
			<p>
				Those stubby limbs are easy to manipulate, and the expressive face makes for great
				characters. Give your Oogah Boogah a silly voice and put on a show.
			</p>
		</div>
		<div class="play-card">
			<h3>Hide and Seek</h3>
			<p>
				Hide your Fuggler around the house for others to find. Bonus points for tucking it somewhere
				unexpected — nothing beats discovering those teeth peeking out of a cupboard.
			</p>
		</div>
		<div class="play-card">
			<h3>Photo Ops</h3>
			<p>
				Take your Fuggler on adventures and snap photos. At the park, on vacation, photobombing
				family portraits — they're surprisingly photogenic for something so weird.
			</p>
		</div>
		<div class="play-card">
			<h3>Cuddle Buddy</h3>
			<p>
				Despite the teeth, Fugglers make excellent comfort companions. Squeeze them, hug them, use
				them as a pillow — they're soft and squishy in all the right ways.
			</p>
		</div>
	</div>

	<div class="good-news-box">
		<h3>Go Ahead, Throw It!</h3>
		<p>
			Here's some good news: your Fuggler is basically indestructible during normal play. Toss it
			across the room, lob it at a sibling, or use it as a soft projectile in an epic pillow fight.
			It won't hurt the Fuggler, and it definitely won't hurt anyone it lands on.
		</p>
		<p class="emphasis">Throwing is encouraged! That toothy grin can handle it.</p>
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
	.good-news-box {
		background: white;
		border-radius: var(--radius-md);
		padding: var(--space-lg);
		box-shadow: var(--shadow-sm);
		text-align: left;
		margin-top: var(--space-md);
	}

	.good-news-box h3 {
		color: var(--color-green);
		font-size: 1.25rem;
		margin-bottom: var(--space-sm);
	}

	.good-news-box p {
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--color-text-light);
		max-width: 650px;
	}

	.good-news-box .emphasis {
		margin-top: var(--space-sm);
		font-weight: 600;
		color: var(--color-green);
	}

	@media (min-width: 640px) {
		.good-news-box {
			text-align: center;
		}

		.good-news-box p {
			margin-inline: auto;
		}
	}

	.play-ideas {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: var(--space-md);
	}

	.play-card {
		background: white;
		border-radius: var(--radius-md);
		padding: var(--space-md);
		box-shadow: var(--shadow-sm);
	}

	.play-card h3 {
		font-size: 1rem;
		color: var(--color-orange);
		margin-bottom: var(--space-xs);
	}

	.play-card p {
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--color-text-light);
	}

	.warning-text {
		text-align: left;
		font-size: 1.05rem;
		line-height: 1.7;
		margin-bottom: var(--space-md);
	}

	.warning-subtext {
		text-align: left;
		font-size: 0.9rem;
		color: var(--color-text-light);
		font-style: italic;
		margin-top: var(--space-md);
	}

	@media (min-width: 640px) {
		.warning-text,
		.warning-subtext {
			text-align: center;
		}
	}

	.section-heading {
		font-size: clamp(1.5rem, 4vw, 2rem);
		color: var(--color-purple);
		margin-bottom: var(--space-md);
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
