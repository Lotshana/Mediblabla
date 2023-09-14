<script setup>
  import Header from './components/Header.vue';
 import Home from './views/Home.vue';
  import Footer from './components/Footer.vue';
  import Connexion from './views/Connexion.vue';
</script>

<template>
  <Header />
  <Connexion/>
  
  <div>
   <Home />
    <Footer />
  </div> 
</template>

<style scoped>

</style>
