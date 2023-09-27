<template>
    
        <div class="p-4 sm:p-7 w-3/6 mx-auto mt-12 mb-48">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-darkblue" v-if="mode == 'login'">Connexion</h1>
            <h1 class="block text-2xl font-bold text-darkblue" v-else>Inscription</h1>
            <p class="mt-2 text-sm text-darkblue" v-if="mode == 'login'">
              Vous n'avez pas de compte?
              <span class="text-lightblue decoration-2 hover:underline font-medium" @click="switchToCreateAccount()" >Inscription</span>
            </p>
            <p class="mt-2 text-sm text-darkblue" v-else>
              Vous avez déjà un compte?
              <span class="text-lightblue decoration-2 hover:underline font-medium" @click="switchToLogin()" >Se connecter</span>
            </p>
          </div>

          <div class="mt-5">
            <form @submit.prevent="submit()">
              <div class="grid gap-y-4">
                <!-- <p v-if="errorMessage" class="(error A VOIR AVEC TAILWIND)"></p> -->

                <!-- Form Group -->
                <div v-if="mode == 'create'">
                  <label for="pseudo" class="block text-sm mb-2 text-darkblue">Pseudo</label>
                  <div class="relative">
                    <input type="" id="pseudo" v-model="pseudo" name="pseudo" class="py-3 px-4 block w-full bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                  </div>
                </div>
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <label for="email" class="block text-sm mb-2 text-darkblue">Email</label>
                  <div class="relative">
                    <input  type="email" id="email" v-model="email" name="email" class="py-3 px-4 block w-full bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                    <div class=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- End Form Group -->
    
                 <!-- Form Group -->
                 <div>
                  <div class="flex justify-between items-center">
                    <label for="password" class="block text-sm mb-2 text-darkblue">Mot de passe</label>
                    <a class="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html" v-if="mode == 'login'">Mot de passe oublié ?</a>
                  </div>
                  <div class="relative">
                    <input type="password" v-model="password" id="password" name="password" class="py-3 px-4 block w-full  bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                    <div class=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <!-- End Form Group -->

                  <button @click="login()" type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-beige text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
                    Connexion
                  </button>
                  <button @click="createAccount()" type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-beige text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" :class="{'button--disabled' : !validatedFields}" v-else>
                    Créer mon compte
                  </button>
              </div>
            </form>
            <h1 class="text-4xl font-bold md:text-3xl dark:text-white">Announcing a free plan for small teams</h1>
        </div>
    </div>

  </template>
  
  <script>
  export default {
    name: 'Login',

    // props: {
    //     errorMessage: {
    //         type: String,
    //         default: ""
    //     }
    // },

    data() {
      return {
        mode:'login',
        pseudo: '',
        email: '',
        password: '',
      };
    },

    computed: {
      validatedFields: function () {
        if (this.mode == 'create') {
          if (this.email != "" && this.pseudo != "" && this.password != "") {
            return true;
          } else {
            return false;
          }
        } else {
          if (this.email != "" && this.password != "") {
            return true;
          } else {
            return false;
          }
        }
      }
    },

    methods: {
      switchToCreateAccount: function() {
        this.mode = 'create';
      },
      switchToLogin: function() {
        this.mode = 'login';
      },
      login: function() {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        }).then(function (response) {
          console.log(response);
        }), function (error) {
          console.log(error);
        }
      },
      createAccount: function() {
        this.$store.dispatch('createAccount', {
          email: this.email,
          pseudo: this.pseudo,
          password: this.password,
        }).then(function (response) {
          console.log(response);
        }), function (error) {
          console.log(error);
        }
      },

      // submit() {
      //   this.$emit("submit", {
      //     email: this.email,
      //     password: this.password
      //   });
      // }
    }
  };
  </script>

