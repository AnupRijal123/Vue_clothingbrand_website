import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import DisplayItems from '../pages/DisplayItems.vue';
import ItemInfoPage from '../pages/ItemInfoPage.vue';


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/categories/:menuName',
    name: 'DisplayItems',
    component: DisplayItems

  },
  {
    path: '/item/:id',
    name: 'ItemInfoPage',
    component: ItemInfoPage,
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
