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
	let innerWidth;
	let scroll;
</script>

<svelte:window bind:innerWidth bind:scrollY={scroll} />

<BackToTopBtn />

<!-- this is the main Hero area todo: move to separate component -->
<div class="hero">
	<video autoplay muted loop src={video} />
</div>
<div class="frame" style:transform={`translate3d(0, ${(scroll / 5.5) * 2}px, 0)`}>
	<!-- this selects the sub-heading based on the video type from the vodei dir path-->
	<img class="logo" src={logo} alt="WWR_logo" />
	<div class="subTxt-banner">
		{#if title === 'water'}
			<div class="sub-text">come dip your toes in our wild and wonderful waters</div>
		{:else if title === 'nature'}
			<div class="sub-text">let us guide you through the wilderness</div>
		{:else}
			<div class="sub-text">colour your life in our wild and wonderful world</div>
		{/if}
	</div>
	{#if innerWidth >= 702}
		<!-- used instead of media or container queries -->
		<Gliders />
	{/if}
</div>
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

	.frame {
		display: block;
		position: absolute;
		top: 20vh;
		height: auto;
		width: 100%;
		margin: 0 auto;
	}

	.logo {
		position: relative;
		display: flex;
		justify-content: center;
		margin: 2vh auto;
		width: calc(150px + 30vmin);
	}

	.subTxt-banner {
		position: relative;
		align-items: center;
	}

	/* .subText-bg {
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		font-size: 2.5rem;
		height:100%;
		background-color: rgba(97, 108, 110, 1);
		filter: blur(80px); 
	}  */

	.sub-text {
		z-index: 9;
		width: 100%;
		text-align: center;
		font-size: calc(14px + 5vmin);
		color: #fff;
		font-style: italic;
		padding: 0.5em 1em;
	}

	.section1 {
		position: relative;
		display: flex;
		transform: skewY(-2deg);
		width: 100%;
		height: auto;
		background: rgba(236, 220, 196, 0.8);
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
		height: auto;
		background: rgba(114, 72, 212, 1);
	}

	.section3 {
		position: relative;
		display: flex;
		width: 100%;
		min-height: 1000px;
		height: auto;
		margin-top: -6em;
		background: rgba(253, 253, 169, 0.95);
	}
	.section4 {
		position: relative;
		display: flex;
		width: 100%;
		height: auto;
		margin-top: 0;
		background: rgba(17, 87, 3, 0.95);
	}
</style>
