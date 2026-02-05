<div class="comparison">
	<figure class="before">
		<img src="/images/fuggler-large.jpg" alt="Oogah Boogah Fuggler at normal size" />
		<figcaption>Before</figcaption>
	</figure>

	<div class="arrow" aria-hidden="true">
		<span class="arrow-icon">&rarr;</span>
	</div>

	<figure class="after">
		<img
			src="/images/fuggler-small.jpg"
			alt="Oogah Boogah Fuggler significantly shrunk after cold exposure"
		/>
		<figcaption>After 3+ hours in zero-degree weather</figcaption>
	</figure>
</div>

<style>
	.comparison {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-md);
		flex-wrap: wrap;
		margin: var(--space-md) 0;
	}

	figure {
		flex: 1;
		min-width: 140px;
		max-width: 280px;
		text-align: center;
	}

	figure img {
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-sm);
		width: 100%;
	}

	figcaption {
		margin-top: var(--space-sm);
		font-weight: 700;
		font-family: var(--font-heading);
		font-size: 0.95rem;
	}

	.before figcaption {
		color: var(--color-green);
	}

	.after figcaption {
		color: var(--color-warning-red);
	}

	.arrow {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.arrow-icon {
		font-size: 2rem;
		color: var(--color-warning-red);
		font-weight: 800;
	}

	@media (max-width: 480px) {
		.comparison {
			flex-direction: column;
		}

		.arrow-icon {
			transform: rotate(90deg);
		}
	}
</style>
