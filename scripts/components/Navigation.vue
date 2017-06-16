<template>
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
          	<router-link to="/" class="nav-item">Madhu Sudhan</router-link>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <router-link to="/about-me" class="nav-item is-active">About Me</router-link>
            <router-link to="/portfolio" class="nav-item is-active">Portfolio</router-link>
            <router-link to="/contact" class="nav-item is-active">Contact Me</router-link>
          </div>
        </div>
      </header>
    </div>
</template>

<script type="text/javascript">
	export default {
		name: 'Navigation',
	}
</script>