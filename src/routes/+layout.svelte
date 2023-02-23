<script>
	import './app.css';
	import { page } from '$app/stores';

	const pageLoader = () => {
		pageIsLoaded = true;
	};
	let pageIsLoaded = false;

	let navItems = [
		{ page: 'Home', path: '/' },
		{ page: 'About', path: 'about' },
		{ page: 'Events', path: 'events' },
		{ page: 'Contact', path: 'contact' }
	];

	let path;

	$: path = $page.route.id;
	console.log($page.route.id.split('/'));
</script>

{#if !pageIsLoaded}
	<div
		use:pageLoader
		style="position:fixed; 
		top:0; 
		bottom:0; 
		left:0; 
		right:0; 
		display:grid; 
		place-items:center; 
		z-index: 9999"
	>
		<img src="/Spin-1s-200px.svg" alt="loading..." />
	</div>
{:else}
	<nav>
		<ul>
			{#each navItems as navItem}
				{#if navItem.page !== 'Home'}
					<a
						href={navItem.path}
						class:selected={$page.route.id.includes(navItem.path)}
						data-sveltekit-preload-data>{navItem.page}</a
					>
				{:else}
					<a href={navItem.path} data-sveltekit-preload-data>{navItem.page} </a>
				{/if}
			{/each}
		</ul>
	</nav>
	<slot />
{/if}

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

	.selected {
		padding: 0 0.5em;
		border-bottom: 1px solid #fff;
	}
</style>
