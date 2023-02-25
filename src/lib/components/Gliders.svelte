<script>
	import Card from './Card.svelte';

	let gliders = ['Book an Event', 'Gallery', 'Testimonials'];
</script>

{#each gliders as glider}
	<Card>
		<!-- <div class="glidersBtn"> -->
		<a href="/" class="button-89">{glider}</a>
		<!-- </div> -->
	</Card>
{/each}

<style>
	a {
		color: #000;
		font-weight: bold;
		padding: 3em 2em;
		background-color: rgba(225, 235, 209, 0.3);
		box-shadow: 0 0 10px 10px rgba(23, 24, 23, 0.3);
	}
</style>
