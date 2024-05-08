import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// Add PrimeVue UI Library
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-cyan/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

//import routes
import router from './router/index.js';

const app = createApp(App);
app.use(PrimeVue, { ripple: true })


    .use(router);


// Mount the app
app.mount('#app');
