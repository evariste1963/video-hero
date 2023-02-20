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
		text-align: center;
		background: rgb(122, 116, 110);
	}
	nav ul {
		display: flex;
		justify-content: center;
	}

	nav a {
		padding: 1em 2em;
		text-decoration: none;
		color: rgb(255, 255, 255);
		font-size: 1.2rem;
	}
</style>
