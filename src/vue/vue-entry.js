//import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import store from './vuex/store';
Vue.config.productionTip = false;

// Vue.component('example-component', require('./widgets/Example.vue').default);
// Vue.component('primary-button', require('./widgets/PrimaryButton.vue').default);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


