import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../login/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '登录',
    icon: 'ios-navigate',
    key: 0,
    isShow: false,
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    icon: 'ios-navigate',
    key: 1,
    isShow: true,
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    icon: 'ios-keypad',
    key: 2,
    isShow: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vueEcharts',
    name: 'vueEcharts',
    icon: 'ios-stats-outline',
    key: 3,
    isShow: true,
    component: () => import('../views/Echarts.vue')
  },
  {
    path: '/iviewLibrary',
    name: 'iview组件库',
    icon: 'ios-paper-outline',
    key: 4,
    isShow: true,
    component: () => import('../views/IviewLibrary.vue')
  },
  {
    path: '/downloadSourceCode',
    name: '下载本系统源码',
    icon: 'ios-download-outline',
    key: 5,
    isShow: true,
    component: () => import('../views/Download.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
