import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import DisplayItems from '../pages/DisplayItems.vue';


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/:menuName',
    name: 'DisplayItems',
    component: DisplayItems

  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
