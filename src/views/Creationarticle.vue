<script setup>
    import axios from 'axios';

    let model = {};

    const submitForm = async () => {
        const instance = axios.create({
            baseURL: "http://localhost/Php_mediblabla/article/",
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        if(!model.title){
            return;
        }

        const formData = new FormData();
        formData.append('title', model.title);
        if(model.author){
            formData.append('author', model.author);
        }
        if(model.description){
            formData.append('description', model.description);
        }
        

        try {
            const response = await instance.post("create.php", formData);
            alert("L'article a bien été inséré")
            model = {};
        } catch (error) {
            console.error(error);
        }
    };

</script>
<template>
    <main class="p-4 sm:p-7 mt-12 articleForm">
        <h2 class="block text-2xl font-bold text-darkblue text-center">Formulaire de création d'article</h2>
        <form @submit.prevent="submitForm"
              class="flex flex-col border rounded-xl p-2 mt-12 sm:p-6 lg:p-8 border-darkblue max-w-lg mx-auto">
            <div class="mt-5 grid grid-cols-1 gap-4 lg:gap-6">
                <div class="relative">
                    <label for="title" class="block text-sm text-darkblue font-medium">Titre</label>
                    <input type="text" id="title" v-model="model.title"
                           class="py-3 px-4 block w-full bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                </div>

                <div class="relative ">
                    <label for="author" class="block text-sm text-darkblue font-medium">Auteur</label>
                    <select id="author" v-model="model.author"
                            class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-lightgrey dark:border-gray-700 dark:text-gray-400">
                        <option value="" class="text-gray-400">Choisissez un auteur</option>
                        <option value="Joe Doe">Joe Doe</option>
                        <option value="Jane Michel">Jane Michel</option>
                        <option value="Tarzan">Tarzan</option>
                        <option value="Homer">Homer</option>
                    </select>
                </div>

                <div class="relative">
                    <label for="createdAt" class="block text-sm text-darkblue font-medium">Date de publication</label>
                    <input type="date" id="createdAt"
                           class="py-3 px-4 block w-full  bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                </div>

                <div class="relative">
                    <label for="image" class="block text-sm text-darkblue font-medium">Image</label>
                    <button id="image"
                            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-beige text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Insérer
                        une image</button>
                </div>

                <div class="relative">
                    <label for="content" class="block text-sm text-darkblue font-medium">Contenu</label>
                    <textarea id="content" cols="30" rows="10" v-model="model.description"
                              class="py-3 px-4 block w-full  bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">Entrer votre texte ici</textarea>
                </div>

                <div class="relative">
                    <label for="tags" class="block text-sm text-darkblue font-medium">Tags</label>
                    <input type="text" id="tags"
                           class="py-3 px-4 block w-full  bg-lightgrey border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                </div>

                <button type="submit"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-beige text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Ajouter</button>
            </div>
        </form>
    </main>
</template>
<style>
    @media screen and (max-width: 768px) {
        .articleForm {
            width: 100%;
            /* margin: auto 20px 50px 20px; */
        }
    }
</style>

