<script>
	import logo from '$lib/hero/logo.png';
	import Gliders from '$lib/components/Gliders.svelte';

	export let data;
	let slugArr = data.video.split('/');
	let title = slugArr[slugArr.length - 2];
</script>

<div class="hero">
	<div>
		<video autoplay muted loop src={data.video} />
		<img class="logo" src={logo} alt="WWR_logo" />
		{#if title === 'water'}
			<div class="sub-text">come dip your toes in our wild and wonderful waters</div>
		{:else if title === 'nature'}
			<div class="sub-text">let us guide you through the wilderness</div>
		{:else}
			<div class="sub-text">colour your life in our wild and wonderful world</div>
		{/if}
	</div>

	<div class="gliders">
		<Gliders />
	</div>
</div>

<section>
	<div class="somethingelse" />

	<div class="somethingelse2" />
</section>

<style>
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

	.sub-text {
		position: absolute;
		width: 100%;
		padding: 0 5%;
		top: 50%;
		font-size: 2.5rem;
		color: #fff;
		font-style: italic;
	}
	.gliders {
		position: absolute;
		top: 60%;
		width: 70%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	section {
		position: relative;
		z-index: 0;
	}

	.somethingelse {
		position: relative;
		display: flex;
		transform: skewY(-2deg);
		width: 100vw;
		height: 600px;
		align-items: center;
		background: rgba(100, 142, 150, 0.99);
		margin-top: 1%;
	}

	.somethingelse2 {
		transform: skewY(1.5deg);
		margin-top: -4%;
		margin-bottom: 3em;
		width: 100vw;
		height: 600px;
		background: rgba(9, 127, 148, 0.99);
	}
</style>
