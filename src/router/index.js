import ConditionalRendering from '@/components/ConditionalRendering.vue'
import DataBinding from '@/components/DataBinding.vue'
import StateVue from '@/components/StateVue.vue'
import About from '@/page/About.vue'
import Home from '@/page/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/state', component: StateVue },
  { path: '/data-binding', component: DataBinding },
  { path: '/conditional-rendering', component: ConditionalRendering },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
