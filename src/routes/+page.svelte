<!-- svelte-ignore a11y-media-has-caption -->
<div class="hero">
	<video autoplay muted playsinline loop src="src\lib\hero\waves.mp4" />
	<h1 class="hero-text">Wild Women Retreats</h1>
</div>

<style>
	.hero {
		text-align: center;
	}
	video {
		width: 100vw;
		height: 80vh;
		position: relative;
		object-fit: cover;
	}

	.hero-text {
		position: absolute;
		width: 100%;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: rgb(95, 6, 11);
		font-size: 6rem;
	}
</style>
