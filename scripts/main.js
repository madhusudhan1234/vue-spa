import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';

const portfolioApp = new Vue({
	name: 'PortfolioApp',
	render: (h) => h(App),
	components: {
		App,
	},
});

portfolioApp.$mount('#app');