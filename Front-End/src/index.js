import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
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
      component: () => import(/* webpackChunkName: "home" */ './views/Diagnostico.vue')
    },
    {

      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]
})
