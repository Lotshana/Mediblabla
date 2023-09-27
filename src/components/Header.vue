<script setup>

</script>

<template>
<header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-gray-200 text-sm py-3 sm:py-0 mt-6">
  <nav class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div class="flex items-center justify-between">
      <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand"><img src="../assets/logo.png" alt="logo-mediblabla" class="logo-mediblabla"></a>
      <div class="sm:hidden">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-darkblue-700 shadow-sm align-middle hover:bg-gray-50" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
        <router-link to="/" class=" font-medium text-darkblue-500 hover:text-beige">Accueil</router-link>
        <router-link to="/article" class=" font-medium text-darkblue hover:text-beige">Dernier article</router-link>
        <router-link to="/about" class=" font-medium text-darkblue hover:text-beige">À propos</router-link>
        <router-link to="/contact" class=" font-medium text-darkblue hover:text-beige">Contact</router-link>
        <router-link to="/CreaArt" class=" font-medium text-beige">Poster un article</router-link>

        <router-link to="/connexion" class="flex items-center gap-x-2 font-medium text-white rounded-md bg-beige hover:bg-darkblue sm:border-gray-300 px-5 py-4">
          <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          Connexion
        </router-link>
      </div>
    </div>
  </nav>
</header>
</template>

<style>
    /* @media screen and (max-width: 768px){

        .logo-mediblabla {
            height: 30px;
        }
    } */
</style>