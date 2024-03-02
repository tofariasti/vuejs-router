import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name:'home', component: () => import('../views/Home.vue') },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { 
    path: '/product/:id/product-name/:name',
    name:'product', component: () => import('../views/Product.vue'), meta:{auth:true} },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;