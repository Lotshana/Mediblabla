import { createRouter, createWebHistory } from "vue-router";

const Home = () => import ("../views/Home.vue")
const Connexion = () => import("../views/Connexion.vue")
const Contact = () => import("../views/Contact.vue")
const About = () => import("../views/About.vue")
const Article = () => import("../views/Article.vue")
const Creationarticle = () => import("../views/Creationarticle.vue")
const Inscription = () => import("../views/Inscription.vue")
// Page 404
const NotFound = () => import("../views/NotFound.vue")

const router = createRouter({
    routes : [
        // Home
        {path: "/", name: "Home", component: Home},
        {path: "/contact", name: "Contact", component: Contact},
        {path: "/connexion", name: "Connexion", component: Connexion},
        {path: "/about", name: "About", component: About},
        // {path: "/article", name: "Article", component: Article},
        {path: "/article/:title", name: "Article", component: Article},
        {path: "/Creationarticle", name: "Creationarticle", component: Creationarticle},
        {path: "/inscription", name: "Inscription", component: Inscription},

    ],
    history: createWebHistory()
})

export default router
