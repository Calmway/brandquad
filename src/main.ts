import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import { useUserStore } from "./store/user";


import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

const pinia = createPinia()
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.mount('#app');

(() => {
    if (!useUserStore().tokenData) {
        router.push('/login')
    }
})()