<template>
  <div class="p-4 sm:p-7 mx-auto mt-12 mb-48 connexion">
    <div class="text-center">
      <h1 class="block text-2xl font-bold text-darkblue" v-if="mode == 'login'">Connexion</h1>
      <h1 class="block text-2xl font-bold text-darkblue" v-else>Inscription</h1>
      <p class="mt-2 text-sm text-darkblue" v-if="mode == 'login'">
        Vous n'avez pas de compte?
        <span class="text-lightblue decoration-2 hover:underline font-medium"
          @click="switchToCreateAccount()">Inscription</span>
      </p>
      <p class="mt-2 text-sm text-darkblue" v-else>
        Vous avez déjà un compte?
        <span class="text-lightblue decoration-2 hover:underline font-medium" @click="switchToLogin()">Se connecter</span>
      </p>
    </div>

    <div class="mt-5 border rounded-xl p-2 mt-12 sm:p-6 lg:p-8 border-darkblue max-w-lg mx-auto">
      <form @submit.prevent="submit()">
        <div class="grid gap-y-4">

          <!-- Form Group -->
          <div v-if="mode == 'create'">
            <label for="username" class="block text-sm mb-2 text-darkblue">Pseudo</label>
            <div class="relative">
              <input type="" id="username" v-model="username" name="username"
                class="py-3 px-4 block w-full bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div>
            <label for="email" class="block text-sm mb-2 text-darkblue">Email</label>
            <div class="relative">
              <input type="email" id="email" v-model="email" name="email"
                class="py-3 px-4 block w-full bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div>
            <div class="flex justify-between items-center">
              <label for="password" class="block text-sm mb-2 text-darkblue">Mot de passe</label>
              <a class="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                href="../examples/html/recover-account.html" v-if="mode == 'login'">Mot de passe oublié ?</a>
            </div>
            <div class="relative">
              <input type="password" v-model="password" id="password" name="password"
                class="py-3 px-4 block w-full  bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
          <!-- End Form Group -->

          <div>
            <button @click="login()"
                    class="py-3 px-4 inline-flex justify-center gap-2 items-center rounded-md border border-none font-semibold bg-beige text-white"
                    :class="{ 'button--disabled': !validatedFields }" v-if="mode == 'login'">
              <span>Connexion</span>
            </button>
            <button @click="createAccount()"
                    class="py-3 px-4 inline-flex justify-center gap-2 items-center rounded-md border border-none font-semibold bg-beige text-white"
                    :class="{ 'button--disabled': !validatedFields }" v-else>
              <span>Inscription</span>
            </button>
          </div>

          <!-- <div v-if="mode == 'login' && status == 'error_login'">
            Adresse mail et/ou mot de passe invalide.
          </div> -->

          <!-- <button @click="login()" type="submit"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-beige text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            :class="{ 'button--disabled': !validatedFields }" v-if="mode == 'login'">
            <span v-if="status == 'loading'">Connexion en cours..</span>
            <span v-else>Connexion</span>
          </button>
          <button @click="createAccount()" type="submit"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-beige text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          :class="{'button--disabled' : !validatedFields}" v-else>
          Créer mon compte
          </button> -->

      </div>
    </form>
  </div>
</div></template>
  
  <script>

  // import { mapState } from 'vuex';

  export default {
    name: 'Login',

    data() {
      return {
        mode:'login',
        username: '',
        email: '',
        password: '',
      };
    },

  //   computed: {
  //     validatedFields: function () {
  //       if (this.mode == 'create') {
  //         if (this.email != "" && this.username != "" && this.password != "") {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       } else {
  //         if (this.email != "" && this.password != "") {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       }
  //     },
  //     ...mapState(['status']),
  //   },

    methods: {
      switchToCreateAccount: function() {
        this.mode = 'create';
      },
      switchToLogin: function() {
        this.mode = 'login';
      },

  //     login: function() {
  //       this.$store.dispatch('login', {
  //         email: this.email,
  //         password: this.password,
  //       }).then(function (response) {
  //         console.log(response);
  //       }), function (error) {
  //         console.log(error);
  //       }
  //     },
  //     createAccount: function() {
  //       this.$store.dispatch('createAccount', {
  //         email: this.email,
  //         username: this.username,
  //         password: this.password,
  //       }).then(function (response) {
  //         console.log(response);
  //       }), function (error) {
  //         console.log(error);
  //       }
  //     },

      // submit() {
      //   this.$emit("submit", {
      //     email: this.email,
      //     password: this.password
      //   });
      // }
    }
  };
  </script>

<style>
    @media screen and (max-width: 768px){
            .connexion {
              width: 100%;
              margin-bottom: 50px;
            }
        }
</style>