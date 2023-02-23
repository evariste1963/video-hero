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
		
			{#each navItems as navItem}
				{#if navItem.page !== 'Home'}
					<a
						href={navItem.path}
						class:selected={$page.route.id.includes(navItem.path)}
						data-sveltekit-preload-data>{navItem.page}</a
					>
				{:else}
					<a href={navItem.path} 
					class:selected = {$page.route.id.split('/')[1] === ("")}
					data-sveltekit-preload-data
					>{navItem.page} </a>
				{/if}
			{/each}
		
	</nav>
	<slot />
{/if}

<style>
	nav {
		position: fixed;
		width: 100vw;
		display:flex;
		top: 0;
		z-index: 999;
		margin: 0;
		text-align: center;
		justify-content: center;
		background: rgba(96, 107, 109, .95);
		box-shadow: 0 0 10px 0 rgb(0 0 0);
		/*backface-visibility: hidden;*/
	}
	
	nav a {
		margin: 0.4% 1em;
		text-decoration: none;
		color: rgb(255, 255, 255);
		font-size:calc(12px + 0.5vw);
		padding: calc(0.1em + 0.3vw) 0;
	}

	.selected {		
		font-weight: bold;
		border-bottom: 1px solid #fff;
	}
</style>
