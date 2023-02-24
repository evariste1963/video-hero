<script>
	import Card from './Card.svelte';

	let gliders = ['section 1', 'section 2', 'section 3'];
</script>

{#each gliders as glider}
	<Card>
		<div class="gliders">
			<p class="gliders">{glider}</p>
		</div>
	</Card>
{/each}

<style>
	.gliders {
		justify-content: center;
	}

	.gliders > p {
		padding: 0 3rem;
		font-size: 2em;
		color: red;
	}
</style>
