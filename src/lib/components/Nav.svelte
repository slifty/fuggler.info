<script lang="ts">
	import { page } from '$app/state';

	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/varieties/', label: 'Varieties' },
		{ href: '/specs/', label: 'Specs' },
		{ href: '/care/', label: 'Care' }
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="nav" aria-label="Main navigation">
	<div class="nav-inner container">
		<a href="/" class="wordmark" onclick={closeMenu}>Fuggler Info</a>

		<button
			class="hamburger"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
			onclick={toggleMenu}
		>
			<span class="hamburger-line" class:open={menuOpen}></span>
			<span class="hamburger-line" class:open={menuOpen}></span>
			<span class="hamburger-line" class:open={menuOpen}></span>
		</button>

		<ul class="nav-links" class:open={menuOpen}>
			{#each links as link}
				<li>
					<a href={link.href} class:active={page.url.pathname === link.href} onclick={closeMenu}>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="rainbow-border"></div>
</nav>

<style>
	.nav {
		background: white;
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: var(--shadow-sm);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}

	.wordmark {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--color-pink);
		text-decoration: none;
	}

	.wordmark:hover {
		color: var(--color-purple);
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
	}

	.hamburger-line {
		display: block;
		width: 24px;
		height: 3px;
		background: var(--color-text);
		border-radius: 2px;
		transition:
			transform 0.3s,
			opacity 0.3s;
	}

	.hamburger-line.open:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}

	.hamburger-line.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger-line.open:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: var(--space-sm);
	}

	.nav-links a {
		display: block;
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-sm);
		font-weight: 600;
		color: var(--color-text);
		transition:
			background-color 0.2s,
			color 0.2s;
	}

	.nav-links a:hover {
		background-color: #f8f0ff;
		color: var(--color-purple);
	}

	.nav-links a.active {
		background-color: var(--color-pink);
		color: white;
	}

	.rainbow-border {
		height: 4px;
		background: linear-gradient(
			90deg,
			var(--color-pink),
			var(--color-orange),
			var(--color-yellow),
			var(--color-green),
			var(--color-blue),
			var(--color-purple)
		);
	}

	@media (max-width: 640px) {
		.hamburger {
			display: flex;
		}

		.nav-links {
			display: none;
			position: absolute;
			top: 64px;
			left: 0;
			right: 0;
			flex-direction: column;
			background: white;
			padding: var(--space-md);
			box-shadow: var(--shadow-md);
			gap: var(--space-xs);
		}

		.nav-links.open {
			display: flex;
		}
	}
</style>
