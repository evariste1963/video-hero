<script>
	let gliders = ['Book an Event', 'Gallery', 'Testimonials', 'videos'];
	//import scrollIntoView from './Scroll.svelte';

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div class="glider-bar" />
<gliders>
	{#each gliders as glider, i}
		<a href=".section{i + 1}" on:click|preventDefault={scrollIntoView} class="button-89">{glider}</a
		>
	{/each}
</gliders>

<!-- </div> -->
<style>
	.glider-bar {
		position: absolute;
		top: 60%;
		width: 100%;
		background-color: rgba(97, 108, 110, 0.7);
		filter: blur(100px);
		height: 15em;
	}
	gliders {
		position: absolute;
		display: flex;
		top: 60%;
		width: 100%;
		justify-content: center;
		height: 15em;
	}

	gliders a {
		font-size: 1.5rem;
		color: #e5dede;
		font-weight: bold;
		width: 10em;
		text-align: center;
		line-height: 5em;
		padding: 1.1em;
		margin: 1.1em;
		text-decoration: none;
	}
</style>
