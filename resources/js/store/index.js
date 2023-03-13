import Vue from 'vue';
import Vuex from 'vuex';
import links from "./modules/links-module";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        errors: [],
    },
    modules: {
        links
    },
});
