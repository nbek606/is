import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routesName} from './routeUtils'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routesName.home ,
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/ship-details/:id',
    name: routesName.shipDetails,
    component: () => import('@/views/ShipDetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
