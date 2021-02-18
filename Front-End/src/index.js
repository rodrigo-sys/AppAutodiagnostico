import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "home" */ './views/Register.vue')
    },

    {

      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/diagnostico',
      name: 'Diagnostico',
      component: () => import(/* webpackChunkName: "login" */ './views/Diagnostico.vue')
    },
    {

      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {

      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue') }, {
      path: '/password',
      name: 'Password',
      component: () => import(/* webpackChunkName: "password" */ './views/Password.vue')
    },
    {

      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue') }
  ]
})
