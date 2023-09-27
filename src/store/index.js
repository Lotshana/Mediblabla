import { createStore } from 'vuex';

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://api.example.com' // PAS D'API ?
});

// Create a new store instance
const store = createStore({
    state: {

    },
    actions: {
        login: ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/login', userInfos)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
            })
        },
        createAccount: ({commit}, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/createAccount', userInfos)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
            })
        }
    }
})

export default store;