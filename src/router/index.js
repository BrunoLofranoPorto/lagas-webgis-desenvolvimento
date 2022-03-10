import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trabalhosdefendidos',
    name: 'TrabalhosDefendidos',
    component: () => import('../views/TrabalhosDefendidos.vue')
  },
  {
    path: '/anais',
    name: 'Anais',
    component: () => import('../views/Anais.vue')
  },
  {
    path: '/livros',
    name: 'LivrosETrabalhosTecnicos',
    component: () => import('../views/LivrosETrabalhosTecnicos.vue')
  },
  {
    path: '/artigos',
    name: 'ArtigosPeriodicos',
    component: () => import('../views/ArtigosPeriodicos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
