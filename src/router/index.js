import { createRouter, createWebHistory } from 'vue-router'
import profileview from '../views/ProfileView.vue'


const routes = [
    {
        path: '/',
        name: 'profile',
        component: profileview,
        // này để các trang không cần đăng nhập
        meta: {
            publicPage: true,
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/HomeView.vue'),
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../views/AboutView.vue'),
            },
            {
                path: 'skills',
                name: 'skills',
                component: () => import('../views/SkillsView.vue'),
            },
            {
                path: 'project',
                name: 'project',
                component: () => import('../views/ProjectView.vue'),
            },

        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFoundView.vue"),
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
