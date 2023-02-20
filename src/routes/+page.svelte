<!-- svelte-ignore a11y-media-has-caption -->
<script>
	import logo from '$lib/hero/logo.png';
</script>

<div class="hero">
	<video autoplay muted playsinline loop src="src\lib\hero\waves.mp4" />
	<img class="logo" src={logo} alt="WWR_logo" />
</div>

<section>
	<div class="somethingelse" />
</section>
<div class="somethingelse2" />

<style>
	.hero {
		position: sticky;
		top: 58px;
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

	section {
		position: relative;
		z-index: 0;
	}

	.somethingelse {
		position: relative;
		transform: skewY(-2deg);
		width: 100vw;
		height: 900px;
		background: rgba(3, 21, 39, 0.95);
		margin-top: -2%;
	}
	.somethingelse2 {
		transform: skewY(1.5deg);
		margin-top: -4%;
		width: 100vw;
		height: 1800px;
		background: rgb(53, 66, 78);
	}
</style>
