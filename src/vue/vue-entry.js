//import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import store from './vuex/vues-store';

Vue.config.productionTip = false;

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'


firebase.initializeApp({
    apiKey: "AIzaSyAFH6dHOHEADYk00YlU2QR4cyziWTfmAwY",
    authDomain: "vue-todo-1e283.firebaseapp.com",
    databaseURL: "https://vue-todo-1e283.firebaseio.com",
    projectId: "vue-todo-1e283",
    storageBucket: "vue-todo-1e283.appspot.com",
    messagingSenderId: "662057494424",
    appId: "1:662057494424:web:cc916e01ec4cd1a00a2ded"
})



new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');


