
require('./bootstrap');
window.Vue = require('vue').default;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store";

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);


Vue.component('create-short-link-component', require('./components/CreateShortLinkComponent.vue').default);

Vue.prototype.$store = store;

const app = new Vue({
    el: '#app',
    store
});
