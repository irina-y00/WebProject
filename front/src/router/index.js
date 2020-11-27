import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from "@/views/Film";
import Catalog from "@/views/Catalog";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Film',
        name: 'Film',
        component: Film
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router