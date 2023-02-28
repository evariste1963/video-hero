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
		<div class="text-bg button-89">
			<a href=".section{i + 1}" on:click|preventDefault={scrollIntoView}>{glider}</a>
		</div>
	{/each}
</gliders>

<!-- </div> -->
<style>
	.glider-bar {
		position: absolute;
		display: flex;
		top: 60%;
		width: 100%;
		/*background-color: rgba(97, 108, 110, 0.7);
		filter: blur(90px);*/
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

	.text-bg {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 15em;
		height: 100%;
		padding: 1.1em;
		margin: 1.1em;
	}

	gliders a {
		display: flex;
		font-size: 1.25rem;
		color: #e5dede;
		/*font-weight: bold;*/
		width: 10em;
		height: 80%;
		align-items: center;
		justify-content: center;
		padding: 1.1em;
		margin: 1.1em;
		text-decoration: none;
		background-color: rgba(97, 108, 110, 0.7);
	}

	gliders a:hover {
		background-color: rgba(43, 46, 47, 0.7);
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
