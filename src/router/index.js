import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import ShopPage from '../pages/ShopPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/shop',
    name: 'ShopPage',
    component: ShopPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
