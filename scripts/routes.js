
import HomePage from './pages/Home.vue';
import AboutMe from './pages/About.vue';
import Portfolio from './pages/Portfolio.vue';
import ContactMe from './pages/Contact.vue';

const routes = [
	{ path: '/', component: HomePage },
  	{ path: '/about-me', component: AboutMe },
  	{ path: '/portfolio', component: Portfolio },
  	{ path: '/contact', component: ContactMe },
]

export default routes;