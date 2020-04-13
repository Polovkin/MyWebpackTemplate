import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/parse',
      component: () => import('./views/Parse.vue'),
    },
    {
      path: '/vuex',
      component: () => import('./views/VuexTest.vue'),
    },
  ],
});
