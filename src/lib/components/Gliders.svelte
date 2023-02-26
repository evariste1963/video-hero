<script>
		let gliders = ['Book an Event', 'Gallery', 'Testimonials'];
		
	
function scrollIntoView({ target }) {
	const el = document.querySelector(target.getAttribute('href'));
	if(!el) return 
	el.scrollIntoView({behavior: 'smooth'})
}
</script>
<div class="glider-bar">
<gliders>
{#each gliders as glider}
		<a href=".section2" on:click|preventDefault={scrollIntoView} class="button-89">{glider}</a>	{/each}
</gliders>
</div>


<style>
	
.glider-bar {
	position: absolute;
	display:flex;
	width:100%;
	top:60%;
	height:15em;
	margin-top: 2em;;

} 

gliders {
		display: flex;
		margin: 0 auto;
	}

gliders a {
		font-size: 1.5rem;;
		font-weight: bold;
		width: 10em;
		text-align: center;
		line-height: 5em;
		padding: 1.1em;
		margin: 1.1em;
		text-decoration: none;
	}
	
</style>
