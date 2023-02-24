<script>
	import Card from './Card.svelte';

	let gliders = ['section 1', 'section 2', 'section 3'];
</script>

{#each gliders as glider}
	<Card>
		<!-- change the gliders to <button-89></button-89> -->
		<div class="glidersBtn">
			<a href="/" class="button-89">{glider}</a>
		</div>
	</Card>
{/each}

<style>
	.glidersBtn {
		justify-content: center;
	}
</style>
