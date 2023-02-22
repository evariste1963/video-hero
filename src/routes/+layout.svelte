<script>
	import './app.css';

	let navItems = [
		{ slug: 'Home', url: '' },
		{ slug: 'About', url: 'about' },
		{ slug: 'Events', url: 'events' },
		{ slug: 'Contact', url: 'contact' }
	];
</script>

<nav>
	<ul>
		{#each navItems as link}
			<a href="/{link.url}">{link.slug}</a>
		{/each}
	</ul>
</nav>
<slot />

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 999;
		margin: 0;
		text-align: center;
		background: rgba(34, 152, 173, 1);
		box-shadow: 0 0 10px 0 rgb(0 0 0);
		backface-visibility: hidden;
	}
	nav ul {
		display: flex;
		justify-content: center;
		margin: 0;
	}

	nav a {
		/*padding: 0.5em 0.8em;*/
		margin: 0.7% 2%;
		text-decoration: none;
		color: rgb(255, 255, 255);
		font-size: 1.2rem;
	}
</style>
