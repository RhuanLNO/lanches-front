import { createMemoryHistory, createRouter } from 'vue-router'
import Restaurants from '../pages/Restaurants.vue'
import Tourism from '../pages/Tourism.vue'

const routes = [
  { path: '/', component: Restaurants },
  { path: '/turismo', component: Tourism },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router