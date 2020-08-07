import Vue from 'vue'
import VueRouter from 'vue-router'
import Render from "../views/Render";
import UserInput from "../views/UserInput";
import Mount from "../views/Mount";
import NewsList from "../views/NewsList";
import NewsEdit from "../views/NewsEdit";
import NewsCreate from "../views/NewsCreate";

Vue.use(VueRouter)

const routes = [
    {
        path: '/render',
        name: 'Render',
        component: Render
    },
    {
        path: '/user_input',
        name: 'UserInput',
        component: UserInput
    },
    {
        path: '/mount',
        name: 'Mount',
        component: Mount
    },
    {
        path: '/news',
        name: 'News',
        component: NewsList
    },
    {
        path: '/news/edit/:id',
        name: 'NewsEdit',
        component: NewsEdit
    },
    {
        path: '/news/create',
        name: 'NewsCreate',
        component: NewsCreate
    },
    {
        path: '*',
        redirect: '/render'
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
