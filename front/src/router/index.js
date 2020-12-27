import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from "@/views/Film";
import Catalog from "@/views/Catalog";
import Registration from "@/views/Registration";
import Profile from "@/views/Profile";
import SignIn from "@/views/SignIn";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/film/:id',
        name: 'Film',
        component: Film,
        props: true
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router