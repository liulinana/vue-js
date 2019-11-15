import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    icon: 'ios-navigate',
    key: 1,
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    icon: 'ios-keypad',
    key: 2,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vueEcharts',
    name: 'vueEcharts',
    icon: 'ios-keypad',
    key: 3,
    component: () => import('../views/Echarts.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
