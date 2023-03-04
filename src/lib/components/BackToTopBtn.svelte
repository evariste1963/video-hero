<script>
	import { scrollTo, scrollRef, scrollTop } from "svelte-scrolling";
	// this is scroll function for the scroll to top button only -> todo: ?
	// function scrollIntoView({ target }) {
	// 	const el = document.querySelector(target.getAttribute('href'));
	// 	if (!el) return;
	// 	el.scrollIntoView({ behavior: 'smooth' });
	// }

	let pos;
</script>

<svelte:window bind:scrollY={pos} /> 

<!-- this creates an empty div with the class 'top' as well as the 'back to top' button ->todo: use same css as gliders animation -->
<!-- <div class="top" /> -->
{#if pos >= window.innerHeight - 25}
	<div class="top-btn">
		
		<button class="myBtn" on:click={() => scrollTop()}>Back to Top</button>
	</div>
{/if}

<style>
	.myBtn {
		position: fixed;
		bottom: 20px;
		right: 30px;
		z-index: 9999;
		font-size: 18px;
		border-top: solid 1px #fff;
		border-bottom: solid 1px #fff;
		border-left: none;
		border-right: none;
		outline: none;
		background-color: rgba(51, 83, 83, 0.9);
		color: white;
		cursor: pointer;
		padding: 15px;
		border-radius: 0.7rem;
	}

	.top-btn ::before {
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

	.top-btn :hover::before {
		transform: scaleX(1);
		transform-origin: top left;
	}

	.top-btn :hover {
		font-weight: bold;
		color: #292727;
		z-index: 1;
		border-radius: 0.7rem;
	}

	.top-btn :active::before,
	.top-btn :active {
		background-color: #2e3431;
		color: #fff !important;
	}
</style>
