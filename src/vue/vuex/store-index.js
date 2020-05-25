import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const axios = require('axios').default;
const key = 'http://jsonplaceholder.typicode.com/users';
const w8 = 'https://w8develop.amemory.pro/home/test-export-tickets-for-mikle';
const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: { // Что изменить
    CHANGE_COUNTER: (state) => {
      state.counter++;
    },
  },
  actions: { // Асинхронный вызов мутации
    COUNTER_PLUS({commit}) {
      commit('CHANGE_COUNTER');
    },
    GET_DATA: async () => {
      try {
        const response = await axios.get(key)
        return await response.data;
      } catch (e) {
        console.error(e);
      }
    },
    GET_COMMENTS: async () => {
      try {
        const response = await fetch(key2);
        return await response.json();
      } catch (e) {
        console.error(e);
      }
    },
    CREATE_USER: async () => {
      const newUser = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          'id': 2,
          'name': 'Ervin Howell',
          'username': 'Antonette',
          'email': 'Shanna@melissa.tv',
          'address': {
            'street': 'Victor Plains',
            'suite': 'Suite 879',
            'city': 'Wisokyburgh',
            'zipcode': '90566-7771',
            'geo': {
              'lat': '-43.9509',
              'lng': '-34.4618',
            },
          },
          'phone': '010-692-6593 x09125',
          'website': 'anastasia.net',
          'company': {
            'name': 'Deckow-Crist',
            'catchPhrase': 'Proactive didactic contingency',
            'bs': 'synergize scalable supply-chains',
          },
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await newUser.json();
    },
  },
  getters: { // вернуть значение
    COUNTER_STATE(state) {
      return state.counter;
    },
  },
});

export default store;
