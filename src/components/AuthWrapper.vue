<template>
    <div>
      <Connexion v-if="user" />
      <LoginForm v-else :errorMessage="errorMessage" @submit="login" />
    </div>
  </template>
  
  <script>
  import LoginForm from "./LoginForm.vue";
  import {login} from "../authentication.js";
  import Connexion from "../views/Connexion.vue";
  
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
  
    components: { LoginForm, Connexion }
  };
  </script>