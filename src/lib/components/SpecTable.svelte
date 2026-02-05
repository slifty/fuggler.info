<script lang="ts">
	interface Props {
		caption: string;
		rows: Array<{ label: string; value: string }>;
	}

	let { caption, rows }: Props = $props();
</script>

<table>
	<caption>{caption}</caption>
	<thead>
		<tr>
			<th scope="col">Property</th>
			<th scope="col">Detail</th>
		</tr>
	</thead>
	<tbody>
		{#each rows as row, i}
			<tr class:alt={i % 2 === 1}>
				<td class="label-cell">{row.label}</td>
				<td>{row.value}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		background: white;
		margin-bottom: var(--space-lg);
	}

	caption {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		font-weight: 600;
		text-align: left;
		padding: var(--space-md);
		color: var(--color-purple);
		background: #f8f0ff;
	}

	th {
		text-align: left;
		padding: var(--space-sm) var(--space-md);
		font-weight: 700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-light);
		border-bottom: 2px solid var(--color-border);
	}

	td {
		padding: var(--space-sm) var(--space-md);
		border-bottom: 1px solid var(--color-border);
	}

	.label-cell {
		font-weight: 600;
		white-space: nowrap;
	}

	.alt {
		background: #fafafa;
	}
</style>
