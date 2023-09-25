<script setup>
  import Header from './components/Header.vue';
 // import Connexion from './views/Connexion.vue';
// import Home from './views/Home.vue';
  import Footer from './components/Footer.vue';

</script>

<template>
  <Header />
 
  
  <div>
   <!--<Home />-->
      <router-view />
  <Footer />
  </div> 
</template>

<style scoped>

</style>
