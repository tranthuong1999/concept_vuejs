import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import ArchivePage from "../components/ArchivePage.vue";
import RouterPage from "../components/RouterPage.vue";
import NotFound from "../components/NotFoundPage.vue";



const routes = [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/about", component: AboutPage, name: "About" },
    { path: "/archive", component: ArchivePage, name: "Archived" },
    { path: "/user", component: RouterPage, name: "User" },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
