import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/product', component: Product },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;