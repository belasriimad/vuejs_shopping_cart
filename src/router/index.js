import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
    ]
});

export default router