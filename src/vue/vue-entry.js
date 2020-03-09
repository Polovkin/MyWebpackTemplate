import Vue from 'vue';


Vue.config.productionTip = false;

Vue.component('example-component', require('./components/Example.vue').default);

const app = new Vue({
  el: '#app',
});


