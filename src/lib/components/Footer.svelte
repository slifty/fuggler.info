<footer class="footer">
	<div class="container footer-inner">
		<p class="site-name">Fuggler Info</p>
		<p class="disclaimer">Unofficial fan site. Not affiliated with ZURU.</p>
		<p class="copyright">&copy; {new Date().getFullYear()} fuggler.info</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-text);
		color: #b2bec3;
		padding: var(--space-lg) 0;
		margin-top: var(--space-2xl);
	}

	.footer-inner {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.site-name {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		font-weight: 800;
		color: white;
	}

	.disclaimer {
		font-size: 0.875rem;
		font-style: italic;
	}

	.copyright {
		font-size: 0.8rem;
	}
</style>
