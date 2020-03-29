import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import store from './store/store-index';
Vue.config.productionTip = false;

// Vue.component('example-component', require('./components/Example.vue').default);
// Vue.component('primary-button', require('./components/PrimaryButton.vue').default);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


