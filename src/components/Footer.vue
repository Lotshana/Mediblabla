<script setup>
    import { ref } from "vue";
</script>

<template>
 <footer class="py-12 bg-darkblue text-white flex justify-center text-center min-width: calc(100vh-header-footer)">
    <div class="flex flex-col justify-center">
        <a href=""><img src="../assets/white-logo.png" alt="logo-mediblabla" class="logo-mediblabla"></a>
        <p class="mt-5">
            Copyright - Design <span class="font-bold">Mediblabla</span>
        </p>
    </div>
</footer>
</template>


<style>
    @media screen and (max-width: 768px){
            .logo-mediblabla {
                height: 30px;
                text-align: center;
            }
            
            p {
                font-size: 12px;
            }
        }
</style>
