import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[]= [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/dashboard/home/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/system/login/Login.vue')
    },
    //{
        //配置404页面
        //path: '/:catchAll(.*)',
        //name: '404',
        //component: () => import(''),
    //}
]
// 路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;