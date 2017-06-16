<template>
	<section class="hero is-warning is-medium">

	<navigation></navigation>

	<div class="hero-body">
		<router-view></router-view>
	</div>
  </section>
</template>

<script type="text/javascript">
	import Navigation from './components/Navigation.vue';

	export default {
		name: 'App',
		components: {
			Navigation,
		},
	}
</script>