import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Test from './views/Test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/test',
      component: () => import('./views/Test.vue'),
    },
    {
      path: '/vuex',
      component: () => import('./views/VuexTest.vue'),
    },
  ],
});
