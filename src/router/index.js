import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartPage from '@/pages/ShoppingCartPage.vue'
import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import ProductPage from '@/pages/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCartPage,
    },
    {
      path: '/products/:id',
      name: 'products',
      component: ProductDetailPage,
      props:true
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPage,
    },
  ],
})

export default router
