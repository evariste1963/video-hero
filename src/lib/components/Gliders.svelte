<!-- this creates the page scroll-to blocks-->
<script>
	import { scrollTo } from 'svelte-scrolling';
	import { sineInOut } from 'svelte/easing';

	let gliders = [
		{ section: 1, title: 'Latest Events', content: 'check for up and coming events' },
		{ section: 2, title: 'Subscribe', content: 'subscribe to our newsletter' },
		{ section: 3, title: 'Testimonials', content: 'see what people ar saying about us' },
		{ section: 4, title: 'Gallery', content: 'view are photos' }
	];

	export let glidersArr = [];

	gliders.forEach((glider) => {
		glidersArr.push('section' + glider.section.toString());
	});
</script>

<div class="glider-bar" />
<gliders>
	{#each glidersArr as glider, i}
		<div class="text-bg">
			{#if [i] == 0}
				<a href="/" use:scrollTo={{ ref: glider, duration: 1000, easing: sineInOut }}
					>{gliders[i].title}</a
				>
			{:else}
				<a
					href="/"
					use:scrollTo={{ ref: glider, duration: 1000 + 1000 * (1 + 1 / i), easing: sineInOut }}
					>{gliders[i].title}</a
				>
			{/if}
		</div>
	{/each}
</gliders>

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
		height: 80%;
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
		transition: font-weight 1s ease;
		z-index: 1;
	}

	/*slide work by changing the origin from left to right*/
	gliders a::before {
		border-radius: 0.7rem;
		content: ' '; /*attr(id)*/
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
