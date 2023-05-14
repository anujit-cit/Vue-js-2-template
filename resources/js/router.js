import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import admin from './components/mainapp.vue'

const routes = [
    {
        path: '/admin',
        component: admin
    },
]

export default new Router({
    mode: "history",
    routes
})
