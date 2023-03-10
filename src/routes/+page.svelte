<script>
	import { scrollRef } from 'svelte-scrolling';
	import logo from '$lib/images/logo.png';
	import Gliders from '$lib/components/Gliders.svelte';
	import BackToTopBtn from '$lib/components/BackToTopBtn.svelte';
	import Section1 from '$lib/components/Section1.svelte';
	import Section2 from '$lib/components/Section2.svelte';
	import Section3 from '$lib/components/Section3.svelte';
	import Section4 from '$lib/components/Section4.svelte';

	export let data;
	let { video, title } = data;

	let sections = [
		{ class: 'section1', title: Section1 },
		{ class: 'section2', title: Section2 },
		{ class: 'section3', title: Section3 },
		{ class: 'section4', title: Section4 }
	];
</script>

<BackToTopBtn />

<!-- this is the main Hero area todo: move to separate component -->
<div class="hero">
	<video autoplay muted loop src={video} />
</div>

<!-- this selects the sub-heading based on the video type from the vodei dir path-->
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

{#each sections as section, i}
	<div class={section.class} use:scrollRef={section.class}>
		<svelte:component this={section.title} />
	</div>
{/each}

<style>
	.hero {
		position: sticky;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		top: 0;
		text-align: center;
		width: 100%;
		height: 105vh;
		z-index: -1;
		background-color: rgba(147, 240, 243, 0.3);
	}

	video {
		width: 100%;
		height: auto;
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
		font-size: 2.5rem;
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

	.section1 {
		position: relative;
		display: flex;
		transform: skewY(-2deg);
		width: 100%;
		height: auto;
		background: rgba(236, 220, 196, 0.98);
		margin-top: 4em;
		padding-bottom: 4em;
	}

	.section2 {
		position: relative;
		display: flex;
		transform: skewY(1.5deg);
		margin-top: -4%;
		margin-bottom: 3em;
		width: 100%;
		height: 105vh;
		background: rgba(114, 72, 212, 1);
	}

	.section3 {
		position: relative;
		display: flex;
		width: 100%;
		height: 105vh;
		margin-top: -6em;
		background: rgba(253, 253, 169, 0.95);
	}
	.section4 {
		position: relative;
		display: flex;
		width: 100%;
		height: 105vh;
		margin-top: 0;
		background: rgba(17, 87, 3, 0.95);
	}
</style>
