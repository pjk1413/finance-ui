import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Schedule from '../views/Schedule.vue';
import Login from '../views/Login.vue'
// import axios from 'axios';

Vue.use(VueRouter)

const routes = [
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      const token = parseInt(sessionStorage.getItem('auth'))
      if(token > 100 && token < 99999) {
        next()
      } else {
        next({
          path: '/login',
          name: 'Login',
          component: Login
        })
      }
    }
  },
  {
    path: '/login',
    alias: '/',
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
