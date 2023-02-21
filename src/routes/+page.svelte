<script>
	import logo from '$lib/hero/logo.png';

	export let data;

	let slugArr = data.video.split('/');
	let title = slugArr[slugArr.length - 2];
</script>

<div class="hero">
	<video autoplay muted playsinline loop src={data.video} />
	<img class="logo" src={logo} alt="WWR_logo" />
	{#if title === 'water'}
		<div class="sub-text">come dip your toes in our wild and wonderful waters</div>
	{:else if title === 'nature'}
		<div class="sub-text">let us guide you through the rushes</div>
	{:else}
		<div class="sub-text">Colour your mind in our wild and wonderful site</div>
	{/if}
</div>

<section>
	<div class="somethingelse" />
</section>
<div class="somethingelse2" />

<style>
	.hero {
		position: sticky;
		top: 40px;
		text-align: center;
		width: 100vw;
		height: 100%;
		z-index: -1;
		text-align: center;
	}
	video {
		width: 100vw;
		height: 100vh;
		position: relative;
		object-fit: fill;
		filter: blur(0px);
	}

	.logo {
		position: absolute;
		width: 30vw;
		min-width: 300px;
		top: 30%;
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

	section {
		position: relative;
		z-index: 0;
	}

	.somethingelse {
		position: relative;
		transform: skewY(-2deg);
		width: 100vw;
		height: 600px;
		background: rgba(100, 142, 150, 0.99);
		margin-top: -2%;
	}
	.somethingelse2 {
		transform: skewY(1.5deg);
		margin-top: -4%;
		width: 100vw;
		height: 600px;
		background: rgba(5, 65, 75, 1);
	}
</style>
