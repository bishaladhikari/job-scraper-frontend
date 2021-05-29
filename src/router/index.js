import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import ScrapeIndex from '../views/Scrape/Scrape.vue'
import Embed from "../views/Scrape/Embed";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/scrape',
        name: 'scrape-index',
        component: ScrapeIndex,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/embed',
        name: 'embed',
        component: Embed,
        meta: {
            requiresAuth: true
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
