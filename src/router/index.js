import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('auth') === 'true') {
        next()
      } else {
        next({
          path: '/login',
          name: 'Login',
          alias: '/',
          component: Login
        })
      }
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
