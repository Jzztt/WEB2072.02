import ConditionalRendering from '@/components/ConditionalRendering.vue'
import DataBinding from '@/components/DataBinding.vue'
import EventHandling from '@/components/EventHandling.vue'
import FormBinding from '@/components/FormBinding.vue'
import ListRendering from '@/components/ListRendering.vue'
import ParentComponent from '@/components/ParentComponent.vue'
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
  { path: '/list-rendering', component: ListRendering },
  { path: '/event-handling', component: EventHandling },
  { path: '/form-binding', component: FormBinding },
  { path: '/parent', component: ParentComponent },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
