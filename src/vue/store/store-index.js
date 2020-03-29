import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: { //Что изменить
    CHANGE_COUNTER: (state) => {
      state.counter++;
    },
  },
  actions: { //Асинхронный вызов мутации
    COUNTER_PLUS({commit}) {
      commit('CHANGE_COUNTER');
    },
  },
  getters: { //вернуть значение
    COUNTER_STATE(state) {
      return state.counter;
    },
  },
});

export default store;
