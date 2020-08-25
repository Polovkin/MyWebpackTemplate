import 'whatwg-fetch'


export default {
    state: {
        users: [],
    },
    mutations: {
        SET_USERS: (state, data) => {
            state.users = data;
        }
    },
    actions: {
        GET_USERS_DATA: async ({commit}) => {
            try {
                const response = await window.fetch('https://jsonplaceholder.typicode.com/users');
                if (response.ok) {
                    let json = await response.json();
                    commit('SET_USERS', json)
                } else {
                    console.log("Ошибка HTTP: " + response.status);
                }
            } catch (e) {
                console.log(e);
            }
        }
    },
    getters: {
        GET_USERS: (state) => {
            console.log(state.users);
            return state.users
        }
    },
}
