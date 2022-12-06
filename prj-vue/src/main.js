import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.css";
import App from './App.vue';
import router from './router.js';




import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHouse,
  faTruckFast,
  faLemon,
  faTicket,
  faBriefcase,
  faCompass,
  faMobileScreen,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faHouse,
    faTruckFast,
    faLemon, 
    faTicket, 
    faBriefcase, 
    faCompass ,
    faMobileScreen,
    faEnvelope,
    faLocationDot );





const app = createApp(App); 


app.use(bootstrap);
app.use(router);

app.component(FontAwesomeIcon ,'font-awesome-icon' )
app.mount('#app');


import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
