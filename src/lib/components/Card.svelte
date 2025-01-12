<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="card">
	{@render children?.()}
</div>

<style>
	.card {
		margin: 10px 5px;
		background: rgb(243, 240, 240);
		padding: 15px 15px 0px 15px;
		border-radius: 1rem;
		box-shadow: 2px 4px rgba(0, 0, 0, 0.4);
	}
</style>
