import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Product from './pages/Product.vue';
import Service from './pages/Service.vue';
import Contact from './pages/Contact.vue';
import NotFound from './pages/NotFound.vue';

import PlogDetail from './pagesContant/PlogDetail.vue';
import PlogGrid from './pagesContant/PlogGrid.vue';
import SpecialOffer from './pagesContant/SpecialOffer.vue';
import Testimonial from './pagesContant/Testimonial.vue';
import TheTeam from './pagesContant/TheTeam.vue';
import PricingPlan from './pagesContant/PricingPlan.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/Home' },
    { path: '/Home', component: Home },
    { path: '/About', component: About },
    { path: '/Product', component: Product },
    { path: '/Service', component: Service },
    { path: '/PlogDetail', component: PlogDetail },
    { path: '/PlogGrid', component: PlogGrid },
    { path: '/PricingPlan', component: PricingPlan },
    { path: '/SpecialOffer', component: SpecialOffer },
    { path: '/Testimonial', component: Testimonial },
    { path: '/TheTeam', component: TheTeam },

    { path: '/Contact', component: Contact },
    { path: '/:NotFound(.*)', component: NotFound },
  ],
});

export default router;
