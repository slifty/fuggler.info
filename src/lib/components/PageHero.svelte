<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
	}

	let { title, subtitle }: Props = $props();
</script>

<header class="hero">
	<div class="container">
		<h1>{title}</h1>
		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}
	</div>
</header>

<style>
	.hero {
		text-align: center;
		padding: var(--space-xl) 0 var(--space-lg);
		background: linear-gradient(135deg, #fff0f6 0%, #f0e6ff 50%, #e6f4ff 100%);
		margin-bottom: var(--space-xl);
	}

	h1 {
		font-size: clamp(2rem, 5vw, 3rem);
		color: var(--color-pink);
	}

	.subtitle {
		margin-top: var(--space-sm);
		font-size: 1.125rem;
		color: var(--color-text-light);
		max-width: 600px;
		margin-inline: auto;
	}
</style>
