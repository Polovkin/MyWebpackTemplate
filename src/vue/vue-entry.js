//import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import store from './vuex/vues-store';

Vue.config.productionTip = false;







new Vue({
    // router,
    // store,
    render: (h) => h(App),
}).$mount('#app');


