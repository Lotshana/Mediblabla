<script setup>
import Connexion from '../views/Connexion.vue';
import Article from '../views/Article.vue';
</script>

<template>
    <header>
        <div class="flex justify-between items-center h-24 px-24 font-bold bg-white">
            <a href=""><img src="../assets/logo.png" alt="logo-mediblabla"></a>
            <div>
                <button class="text-darkblue">Inscription</button>
                <button class="ml-5 w-44 h-10 rounded-md bg-beige uppercase font-bold text-white">Se connecter </button>
            </div>
        </div>
        <nav class="flex justify-center items-center self-center h-12 bg-darkblue">
            <ul class="flex gap-12">
                <li>
                    <router-link to="/" class="uppercase font-bold text-white">Home</router-link>
                </li>
                <li>
                    <router-link to="/articles" class="uppercase font-bold text-white">Article</router-link>
                </li>
                <!--<li>
                    <router-link to="/about" class="uppercase font-bold text-white">À propos</router-link>
                </li>-->
                <li>
                    <router-link to="/contact" class="uppercase font-bold text-white">Contact</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
</style>