import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue"
//import Article from "../views/Article.vue"
//import Contact from "../views/Contact.vue"

const Home = () => import ("../views/Home.vue")
const Connexion = () => import("../views/Connexion.vue")
const Contact = () => import("../views/Contact.vue")
// Page 404
const NotFound = () => import("../views/NotFound.vue")
const router = createRouter({
    routes : [
        // Home
        {path: "/", name: "Home", component: Home},
        {path: "/contact", name: "Contact", component: Contact},
        {path: "/connexion", name: "Connexion", component: Connexion},
        

    ],
    history: createWebHistory()
})

export default router