<template>
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 sm:items-center gap-8">
    <div class="sm:order-2">
      <div class="relative pt-[50%] sm:pt-[100%] rounded-lg">
        <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="../assets/medic-2.jpg" alt="Image Description">
      </div>
    </div>

    <div class="sm:order-1">
      <p class="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-beige text-white">
        Information générale
      </p>

      <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-darkblue">
        <a class="hover:text-beige" href="#">
            Déontologie du médecin sur Internet : quelles règles à observer ?
        </a>
      </h2>

      <div class="mt-6 sm:mt-10 flex items-center">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 sm:h-14 sm:w-14 rounded-full" src="../assets/pfp-doctor.jpg" alt="Profile picture">
        </div>

        <div class="ml-3 sm:ml-4">
          <p class="sm:mb-1 font-semibold text-darkblue">
            Louise Donadieu
          </p>
          <p class="text-xs text-darkblue">
            Publié le 01/09/2023
          </p>
        </div>
      </div>

      <div class="mt-5">
        <a class="inline-flex items-center gap-x-1.5 text-darkblue hover:text-beige decoration-2 hover:underline font-medium" href="#">
          Lire la suite
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>



<!-- PLUS D'ARTICLES -->

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
    <a class="group rounded-xl overflow-hidden" href="#">
      <div class="sm:flex">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="../assets/medic-3.jpg" alt="Image Description">
        </div>

        <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
          <h3 class="text-xl font-semibold text-gray-800 text-darkblue hover:text-beige">
            Nouveau système d’assistance cardiaque percutanée
          </h3>
          <p class="mt-3 text-darkblue">
            L'équipe du Pr Spaulding du service de cardiologie de l'hopital Georges Pompidou a réussi...
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1.5 text-darkblue hover:text-beige decoration-2 hover:underline font-medium">
            Lire la suite
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
        </div>
      </div>
    </a>

    <a class="group rounded-xl overflow-hidden" href="#">
      <div class="sm:flex">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="../assets/medic-3.jpg" alt="Image Description">
        </div>

        <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
          <h3 class="text-xl font-semibold text-gray-800 text-darkblue hover:text-beige">
            Prédire le risque d’AVC par un simple test de dessin
          </h3>
          <p class="mt-3 text-darkblue">
            Au cours d'une étude menée sur 1000 hommes agés entre 65 et 75 ans, les chercheurs...
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1.5 text-darkblue hover:text-beige decoration-2 hover:underline font-medium">
            Lire la suite
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
        </div>
      </div>
    </a>

    <a class="group rounded-xl overflow-hidden" href="#">
      <div class="sm:flex">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="../assets/medic-1.jpg" alt="Image Description">
        </div>

        <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
          <h3 class="text-xl font-semibold text-darkblue hover:text-beige">
            Le régime Dukan est-il dangereux pour la santé ?
          </h3>
          <p class="mt-3 text-darkblue">
            Le régime Dukan est un des régimes les plus suivis en France.
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1.5 text-darkblue hover:text-beige decoration-2 hover:underline font-medium">
            Lire la suite
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
        </div>
      </div>
    </a>

    <a class="group rounded-xl overflow-hidden" href="#">
      <div class="sm:flex">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="../assets/medic-1.jpg" alt="Image Description">
        </div>

        <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
          <h3 class="text-xl font-semibold text-darkblue hover:text-beige">
            Conseils pour conserver une bonne vue.
          </h3>
          <p class="mt-3 text-darkblue">
            La vue est un bien précieux et préserver sa vue le plus longtemps possible ne nécessite pas de grands efforts.
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1.5 text-darkblue hover:text-beige decoration-2 hover:underline font-medium">
            Lire la suite
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
        </div>
      </div>
    </a>
  </div>
</div>

<a class="m-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xm font-medium bg-beige text-white space-y-3" href="#">
          Plus d'articles
        </a>
</template>

<script setup>
</script>

<style>
</style>
