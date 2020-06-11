//import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import store from './vuex/store-index';
Vue.config.productionTip = false;

// Vue.component('example-component', require('./widget/Example.vue').default);
// Vue.component('primary-button', require('./widget/PrimaryButton.vue').default);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


