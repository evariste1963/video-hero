<script>
	import logo from '$lib/hero/logo.png';
	import Gliders from '$lib/components/Gliders.svelte';
	import Section1 from '$lib/components/Section1.svelte'

	export let data;
	let slugArr = data.video.split('/');
	let title = slugArr[slugArr.length - 2];

	let sections = ['section1', 'section2', 'section3', 'section4'];

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth' });
	}

	let pos;
</script>

<div class="top" />
{#if pos >= window.innerHeight - 25}
	<a class="myBtn" href=".top" on:click|preventDefault={scrollIntoView}>Back to top</a>
{/if}
<svelte:window bind:scrollY={pos} />

<div class="hero">
	<div>
		<video autoplay muted loop src={data.video} />
	</div>
</div>

<img class="logo" src={logo} alt="WWR_logo" />
<div class="subText-bg">""</div> 
{#if title === 'water'}
	<div class="sub-text">come dip your toes in our wild and wonderful waters</div>
{:else if title === 'nature'}
	<div class="sub-text">let us guide you through the wilderness</div>
{:else}
	<div class="sub-text">colour your life in our wild and wonderful world</div>
{/if}


<Gliders />
<section>
	<container class="section1">
		<div class="contents1">
<Section1 />
</div>
</container>
</section>
<section>
	{#each sections as section}
		<div class={section} />
	{/each}
</section>

<style>
	.myBtn {
		position: fixed;
		bottom: 20px;
		right: 30px;
		z-index: 9999;
		font-size: 18px;
		border: none;
		outline: none;
		background-color: rgba(51, 83, 83, 0.9);
		color: white;
		cursor: pointer;
		padding: 15px;
		border-radius: 4px;
	}

	.myBtn:hover {
		background-color: #555;
	}

	.hero {
		position: sticky;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		top: 0;
		text-align: center;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		background-color: rgba(147, 240, 243, 0.3);
	}

	video {
		width: 100vw;
		height: 100vh;
		position: relative;
		object-fit: fill;
		filter: blur(0px);
		background-color: #000;
	}

	.logo {
		position: absolute;
		width: 30vw;
		min-width: 300px;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		size: 50px 200px;
	}

	
	.subText-bg {
		position: absolute;
		top: 50%;
		width: 100%;
		font-size:2.5rem;
		background-color: rgba(97, 108, 110, 1);
		filter: blur(60px);
		
	}

	.sub-text {
		position: absolute;
		top: 50%;
		width: 100%;
		padding: 0 5%;
		margin: 0 auto;
		text-align: center;
		font-size: 2.5rem;
		color: #fff;
		font-style: italic;
	}

	section {
		position: relative;
		z-index: 0;
		width:100%;
		align-items: center;
		justify-content: center;
		
	}

	.section1 {
		position: relative;
		display: flex;
		transform: skewY(-2deg);
		width: 100vw;
		height: auto;
		background: rgba(236, 220, 196, 0.9);
		margin-top: 1%;
		
		
	}

	.contents1 {
		transform: skewY(2deg);
		align-items: center;
		justify-content: center;
		margin: 2em auto;
		text-align: center;
		width:75%
	}

	.section2 {
		position: relative;
		display: flex;
		transform: skewY(1.5deg);
		margin-top: -4%;
		margin-bottom: 3em;
		width: 100vw;
		height: 100vh;
		background: transparent;
	}

	.section3 {
		position: relative;
		display: flex;
		width: 100vw;
		height: 100vh;
		margin-top: -6em;
		background: rgba(114, 72, 212, 0.99);
	}

	.section4 {
		position: relative;
		display: flex;
		width: 100vw;
		height: 100vh;
		margin-top: -6em;
		background: rgba(41, 90, 21, 0.99);
	}
</style>
