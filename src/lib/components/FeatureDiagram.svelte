<script lang="ts">
	import FeatureLabel from './FeatureLabel.svelte';

	const features = [
		{
			label: 'Button Eyes',
			description: 'Mismatched for extra charm',
			x: 22,
			y: 10,
			dotColor: 'var(--color-blue)',
			align: 'right' as const
		},
		{
			label: 'Human-like Teeth',
			description: 'The signature Fuggler feature',
			x: 58,
			y: 22,
			dotColor: 'var(--color-yellow)',
			align: 'left' as const
		},
		{
			label: 'Felt Tongue',
			description: 'Playfully sticking out',
			x: 15,
			y: 38,
			dotColor: 'var(--color-pink)',
			align: 'right' as const
		},
		{
			label: 'Plush Body',
			description: 'Soft, huggable fabric',
			x: 62,
			y: 52,
			dotColor: 'var(--color-green)',
			align: 'left' as const
		},
		{
			label: 'Stubby Limbs',
			description: 'Short arms and legs',
			x: 18,
			y: 72,
			dotColor: 'var(--color-orange)',
			align: 'right' as const
		}
	];
</script>

<div class="diagram-section">
	<h2>Anatomy of an Oogah Boogah</h2>

	<div class="diagram-container">
		<div class="image-wrapper">
			<img
				src="/images/fuggler-large.jpg"
				alt="Oogah Boogah Fuggler with rainbow plush body, button eyes, and signature human-like teeth"
			/>
			<div class="labels-overlay">
				{#each features as feat}
					<FeatureLabel
						label={feat.label}
						description={feat.description}
						x={feat.x}
						y={feat.y}
						dotColor={feat.dotColor}
						align={feat.align}
					/>
				{/each}
			</div>
		</div>
	</div>

	<ul class="features-list">
		{#each features as feat}
			<li>
				<span class="dot" style="background-color: {feat.dotColor};"></span>
				<div>
					<strong>{feat.label}</strong>
					<span>{feat.description}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.diagram-section {
		margin: var(--space-xl) 0;
	}

	h2 {
		text-align: center;
		font-size: clamp(1.5rem, 4vw, 2.25rem);
		color: var(--color-purple);
		margin-bottom: var(--space-lg);
	}

	.diagram-container {
		display: none;
		justify-content: center;
	}

	.image-wrapper {
		position: relative;
		display: inline-block;
		max-width: 500px;
		width: 100%;
		border-radius: var(--radius-lg);
		overflow: visible;
		box-shadow: var(--shadow-lg);
	}

	.image-wrapper img {
		border-radius: var(--radius-lg);
		width: 100%;
	}

	.labels-overlay {
		position: absolute;
		inset: 0;
	}

	/* Mobile: show list instead of overlay */
	.features-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		max-width: 400px;
		margin: var(--space-lg) auto 0;
		list-style: none;
	}

	.features-list li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
	}

	.features-list .dot {
		flex-shrink: 0;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin-top: 5px;
	}

	.features-list strong {
		display: block;
		font-family: var(--font-heading);
	}

	.features-list span {
		color: var(--color-text-light);
		font-size: 0.9rem;
	}

	@media (min-width: 640px) {
		.diagram-container {
			display: flex;
		}

		.features-list {
			display: none;
		}
	}
</style>
