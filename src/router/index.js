import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Article from "../views/Article.vue"
import Contact from "../views/Contact.vue"

const router = createRouter({
    routes : [
        // Home
        {path: "/", name: "Home", component: Home},
        {path: "/contact", name: "Contact", component: Contact},
        {path: "/login", name: "Login", component: Login},
        {path: "/register", name: "Register", component: Register},
        {path: "/article", name: "Article", component: Article},

    ],
    history: createWebHistory()
})

export default router