<script lang="ts">
	interface Props {
		label: string;
		description: string;
		x: number;
		y: number;
		dotColor?: string;
		align?: 'left' | 'right';
	}

	let {
		label,
		description,
		x,
		y,
		dotColor = 'var(--color-pink)',
		align = 'left'
	}: Props = $props();
</script>

<div class="feature-label" style="left: {x}%; top: {y}%;" class:align-right={align === 'right'}>
	<span class="dot" style="background-color: {dotColor};"></span>
	<div class="text">
		<strong>{label}</strong>
		<span class="desc">{description}</span>
	</div>
</div>

<style>
	.feature-label {
		position: absolute;
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
		pointer-events: none;
		max-width: 180px;
	}

	.feature-label.align-right {
		flex-direction: row-reverse;
		text-align: right;
	}

	.dot {
		flex-shrink: 0;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 2px solid white;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		margin-top: 2px;
	}

	.text {
		background: rgba(255, 255, 255, 0.92);
		padding: 4px 8px;
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-sm);
		font-size: 0.8rem;
		line-height: 1.3;
	}

	strong {
		display: block;
		color: var(--color-text);
		font-family: var(--font-heading);
		font-size: 0.85rem;
	}

	.desc {
		color: var(--color-text-light);
		font-size: 0.75rem;
	}
</style>
