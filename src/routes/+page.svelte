<!-- svelte-ignore a11y-media-has-caption -->
<script>
	import logo from '$lib/hero/logo.png';
</script>

<div class="hero">
	<video autoplay muted playsinline loop src="src\lib\hero\waves.mp4" />
	<img class="logo" src={logo} alt="WWR_logo" />
</div>

<style>
	.hero {
		text-align: center;
		width: 100vw;
	}
	video {
		width: 100vw;
		height: 80vh;
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
</style>
