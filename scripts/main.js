import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import routes from './routes';

const router = new VueRouter({
  routes: routes,
})

Vue.use(VueRouter);

const portfolioApp = new Vue({
	name: 'PortfolioApp',
	router: router,
	render: (h) => h(App),
	components: {
		App,
	},
});

portfolioApp.$mount('#app');