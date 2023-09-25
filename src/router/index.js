import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue"
//import Article from "../views/Article.vue"
//import Contact from "../views/Contact.vue"

const Home = () => import ("../views/Home.vue")
const Connexion = () => import("../views/Connexion.vue")
const Contact = () => import("../views/Contact.vue")
const About = () => import("../views/About.vue")
const Article = () => import("../views/Article.vue")
const CreaArt = () => import("../views/CreaArt.vue")
// Page 404
const NotFound = () => import("../views/NotFound.vue")
const router = createRouter({
    routes : [
        // Home
        {path: "/", name: "Home", component: Home},
        {path: "/contact", name: "Contact", component: Contact},
        {path: "/connexion", name: "Connexion", component: Connexion},
        {path: "/about", name: "About", component: About},
        {path: "/article", name: "Article", component: Article},
        {path: "/crea_art", name: "CreaArt", component: CreaArt}
       

        

    ],
    history: createWebHistory()
})

export default router