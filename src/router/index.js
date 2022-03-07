import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/card/add',
    name: 'Add card',
    component: () => import('../views/CreateCard.vue')
  },
  {
    path: "/cards/:cardNumber",
    name: "card detail",
    component: () => import("../views/CardDetail.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
