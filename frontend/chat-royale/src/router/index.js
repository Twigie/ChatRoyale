import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loginPage from '../views/loginPage'
import game from '../views/game'
import lobby from '../views/lobby'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/game/:roomID',
    name: 'game',
    props: true,
    component: game

  },
  {
    path: '/lobby',
    name: 'lobby',
    component: lobby
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  //}
]

const router = new VueRouter({
  routes
})

export default router
