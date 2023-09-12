<script setup>
    import { ref } from "vue";
</script>

<template>
    <header>
        <div class="flex justify-between items-center h-24 px-24 font-bold">
            <a href=""><img src="../assets/logo.png" alt="logo-mediblabla"></a>
            <div>
                <button class="text-darkblue">Inscription</button>
                <button class="ml-5 w-44 h-10 rounded-md bg-beige uppercase font-bold text-white">Se connecter</button>
            </div>
        </div>
        <nav class="h-14 bg-darkblue">
            <ul class="flex justify-center gap-12">
                <li>
                    <a href="" class="uppercase font-bold text-white">Accueil</a>
                </li>
                <li>
                    <a href="" class="uppercase font-bold text-white">Articles</a>
                </li>
                <li>
                    <a href="" class="uppercase font-bold text-white">À propos</a>
                </li>
                <li>
                    <a href="" class="uppercase font-bold text-white">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
</style>
