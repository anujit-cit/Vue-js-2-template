import './bootstrap';
window.Vue = require('vue');
import router from "./router";
import Vue from "vue";

Vue.component('mainapp', require('./components/mainapp.vue').default);

const app = new Vue({
    el: '#app',
    router
});

