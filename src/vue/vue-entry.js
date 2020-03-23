import '@babel/polyfill';
import Vue from 'vue';
import App from "./App.vue";
Vue.config.productionTip = false;

Vue.component('example-component', require('./components/Example.vue').default);
Vue.component('primary-button', require('./components/PrimaryButton.vue').default);

new Vue({render: h => h(App)}).$mount("#app");



