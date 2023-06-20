import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import AddConge from '../components/AddConge.vue'

const routes= [
  {
    path: '',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/AddConge',
    name: 'AddConge',
    component: AddConge
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
