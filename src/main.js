import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import DynamicLayout from './layouts/DynamicLayout.vue';

import 'tachyons/css/tachyons.min.css';
import './assets/globals.scss';

createApp(App)
  .use(store)
  .use(router)
  .component('DynamicLayout', DynamicLayout)
  .mount('#app');
