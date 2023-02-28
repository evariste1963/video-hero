<script>
	let gliders = ['Latest Events', 'Subscribe ', 'Testimonials', 'Gallery'];
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
		background-color: rgba(97, 108, 110, 0.7);
		filter: blur(90px);
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
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10em;
		height: 80%;
		border-top: solid 2px #fff;
		border-bottom: solid 2px #fff;
		border-left: none;
		border-right: none;
		font-size: 1.5rem;
		font-weight: 500;
		text-decoration: none;
		padding: 1rem 1rem;
		border-radius: 0.7rem;
		margin: 0;
		color: rgba(255, 255, 255, 0.7);
		background-color: rgba(97, 108, 110, 0.7);
		cursor: pointer;
		transition: color 1s ease;
		z-index: 1;
	}

	gliders a::before {
		border-radius: 0.7rem;
		content: ' ';
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		inset: 2px;		
		background: rgba(255, 255, 255, 0.6);
		z-index: -1;
		transform: scaleX(0);
		transform-origin: top right;
		transition: transform 0.5s ease;
	}

	gliders a:hover::before {
		transform: scaleX(1);
		transform-origin: top left;
	
	}

	gliders a:hover {
		font-weight: bold;
		color: #292727;
		z-index: 1;
		border-radius: 0.7rem;
		
	}

</style>
