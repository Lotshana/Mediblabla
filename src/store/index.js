import { createStore } from 'vuex';

const axios = require('axios');

const instance = axios.create({
    baseURL: '../Php_Mediblabla/API_PHP-main'
});

// Create a new store instance
const store = createStore({
    state: {
        status: '',
        user: {
            userId: -1,
            token: '',
        },
    },

    mutations: {
        setStatus: function (state, status) {
            state.status = status;
        },
        logUser: function (state, user) {
            state.user = user;
        }
    },
    
    actions: {
        login: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/login', userInfos)
                .then(function (response) {
                    commit('setStatus', '');
                    commit('logUser', response.data);
                    resolve(response);
                })
                .catch(function (error) {
                    commit('setStatus', 'error_login');
                    reject(error);
                });
            })
        },
        createAccount: ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/createAccount', userInfos)
                .then(function (response) {
                    commit('setStatus', 'created');
                    resolve(response);
                })
                .catch(function (error) {
                    commit('setStatus', 'error_create');
                    reject(error);
                });
            })
        },
    }
})

export default store;