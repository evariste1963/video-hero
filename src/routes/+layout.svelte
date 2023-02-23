<script>
	import './app.css';
	import Navbar from '$lib/components/Navbar.svelte'
	import Loading from '../lib/components/Loading.svelte'

	const pageLoader = () => {
		pageIsLoaded = true;
	};
	let pageIsLoaded = false;

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
		z-index: 9999" >
		<Loading />
	</div>
{:else}
	<Navbar />
	<slot />
{/if}

