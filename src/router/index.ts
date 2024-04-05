import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '',
        redirect: { name: 'home' },
        component: () => import('../App.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import("../pages/Home.vue"),
                meta: {
                    title: 'Home'
                }
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../pages/Login.vue'),
                meta: {
                    title: 'Login'
                }
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('../pages/Register.vue'),
                meta: {
                    title: 'Register'
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;