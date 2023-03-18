<!-- this creates the navbar items based on the navItems array-->
<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';

	let navItems = [
		{ page: 'Home', path: '/' },
		{ page: 'About', path: 'about' },
		{ page: 'Events', path: 'events' },
		{ page: 'Contact', path: 'contact' }
	];
</script>

<nav>
	<img src={logo} alt="logo" class="logo" />
	<div class="links">
		{#each navItems as navItem}
			{#if navItem.page !== 'Home'}
				<a
					href={navItem.path}
					class:selected={$page.route.id.includes(navItem.path)}
					data-sveltekit-preload-data>{navItem.page}</a
				>
			{:else}
				<a
					href={navItem.path}
					class:selected={$page.route.id.split('/')[1] === ''}
					data-sveltekit-preload-data
					>{navItem.page}
				</a>
			{/if}
		{/each}
	</div>
</nav>

<style>
	nav {
		position: fixed;
		width: 100%;
		display: flex;
		top: 0;
		z-index: 999;
		margin: 0;
		background: rgba(97, 108, 110, 0.98);
		box-shadow: 0 0 10px 0 rgb(0 0 0);
	}

	.links {
		display: flex;
		text-align: center;
		justify-content: right;
		align-items: center;
		margin: 0 2em;
		width: 100%;
	}

	.logo {
		width: 20vh;
		margin-left: 2em;
	}

	nav a {
		margin: 0.4% 1em;
		text-decoration: none;
		color: rgb(255, 255, 255);
		font-size: calc(12px + 0.5vw);
		padding: calc(0.1em + 0.3vw) 0;
	}

	.selected {
		font-weight: bold;
		border-bottom: 1px solid #fff;
	}
</style>
