import { createRouter, createWebHistory } from 'vue-router'
import authMiddleware from '@/router/middlewares/auth.middleware.js'
import guestMiddleware from '@/router/middlewares/guest.middleware.js'
import BaseLayout from '@/layouts/base.layout.vue'
import AuthLayout from '@/layouts/auth.layout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            component: BaseLayout,
            redirect: () => {
                return { name: "home" }
            },
            children: [
                {
                    path: '/main',
                    name: 'home',
                    beforeEnter: [authMiddleware],
                    component: () => import("../views/HomeView.vue")
                }
            ]
        },
        {
            path: '',
            component: AuthLayout,
            children: [
                {
                    path: "/login",
                    name: 'login',
                    beforeEnter: [guestMiddleware],
                    component: () => import("../views/LoginView.vue")
                }
            ]
        },
    ]
})

export default router
