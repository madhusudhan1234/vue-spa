<template>
  <div class="container has-text-centered">
    <h1 class="title">
      Hello, 
    </h1>
    <h2 class="subtitle">
      I am Madhu Sudhan Subedi
    </h2>
    <h2 class="subtitle">
      #WebDeveloper
    </h2>

	<social-links></social-links>
  </div>
</template>

<script type="text/javascript">
    import SocialLinks from '../components/SocialLinks.vue';

	export default {
		name: 'HomePage',
		components: {
			SocialLinks,
		}
	}
</script>