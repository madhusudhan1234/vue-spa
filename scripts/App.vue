<template>
	<section class="hero is-warning is-medium">
		<div class="hero-body">
			<div class="container has-text-centered">
				<img src="/images/madhusudhan.jpg" alt="Madhu Sudhan Subedi" style="border-radius: 50%; height:120px;">
			    <h1 class="title">
			      Namaste,
			    </h1>
			    <h2 class="subtitle">
			      I am <b>Madhu Sudhan Subedi</b>
			    </h2>
			    <h2 class="subtitle">
			      #WebDeveloper
			    </h2>

				<social-links></social-links>
			</div>
		</div>
    </section>
</template>

<script type="text/javascript">
	import SocialLinks from './components/SocialLinks.vue';

	export default {
		name: 'App',
		components: {
			SocialLinks,
		}
	}
</script>