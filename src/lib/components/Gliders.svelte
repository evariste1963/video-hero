<script>
		let gliders = ['Book an Event', 'Gallery', 'Testimonials'];
</script>
<div class="glider-bar">
<gliders>
{#each gliders as glider}
	
		<!-- <div class="glidersBtn"> -->
		<a href="/" class="button-89">{glider}</a>
		<!-- </div> -->
	
{/each}
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
		line-height: 10vh;
		padding: 2rem;
		margin: 2rem;
		text-decoration: none;
	}
	
</style>
