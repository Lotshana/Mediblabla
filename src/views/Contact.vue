<template>
    <!-- Contact Us -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-darkblue sm:text-4xl">
        Contactez-nous !
      </h1>
    </div>
  </div>

  <div class="mt-12 max-w-lg mx-auto">
    <!-- Card -->
    <div class="flex flex-col border rounded-xl p-2 sm:p-6 lg:p-8 border-darkblue">
     

      <form>
        <div class="grid gap-4 lg:gap-6">
          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="prenom" class="block text-sm  text-darkblue font-medium">Prénom :</label>
              <input type="text" name="prenom" id="prenom" placeholder="Joe" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-lightgrey dark:border-gray-700 dark:text-gray-400">
            </div>

            <div>
              <label for="nom" class="block text-sm  text-darkblue font-medium">Nom :</label>
              <input type="text" name="nom" id="nom" placeholder="Doe" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-lightgrey dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
          <!-- End Grid -->

          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="email" class="block text-sm  text-darkblue font-medium">Email</label>
              <input type="email" name="email" id="email" autocomplete="email" placeholder="exemple@exemple.fr" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-lightgrey dark:border-gray-700 dark:text-gray-400">
            </div>

            <div>
              <label for="phone-number" class="block text-sm text-darkblue font-medium ">N° téléphone</label>
              <input type="text" name="phone-number" id="phone-number" placeholder="+33 (0)7 14 15 16 17" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-lightgrey dark:border-gray-700 dark:text-gray-400">
            </div>
          </div>
          <!-- End Grid -->

          <div>
            <label for="message" class="block text-sm  text-darkblue font-medium">Votre message:</label>
            <textarea id="message" name="message" placeholder="Tapez votre message ici" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-lightgrey dark:border-gray-700 dark:text-gray-400"></textarea>
          </div>
        </div>
        <!-- End Grid -->

        <div class="mt-6 grid">
          <button type="submit" class="inline-flex justify-center items-center gap-x-3 text-center bg-beige hover:bg-beige-700 border border-transparent text-sm lg:text-base text-white font-medium text-uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Envoyer</button>
        </div>

        
      </form>
    </div>
    <!-- End Card -->
  </div>
</div>
</template>

<script setup>
</script>

<style>
</style>
