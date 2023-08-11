import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./pages/MainPage')
    },
    {
        path: '/game',
        component: () => import('./pages/Game')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
