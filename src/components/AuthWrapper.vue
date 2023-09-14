<template>
    <div>
      <App v-if="user" />
      <LoginForm v-else :errorMessage="errorMessage" @submit="login" />
    </div>
  </template>
  
  <script>
 import App from "../App.vue";
  import LoginForm from "./LoginForm.vue";
  import {login} from "../authentication.js";
  
  export default {
    data() {
      return {
        user: null,
        errorMessage: ""
      };
    },
  
    methods: {
      login({ email, password }) {
        this.user = { email, password };
        this.errorMessage = this.user ? "" : "Erreur d'authentification, merci de réessayer"
      }
    },
  
    components: { App, LoginForm }
  };
  </script>