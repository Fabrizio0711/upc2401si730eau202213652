import {createRouter, createWebHistory} from "vue-router";
// import Home from "../public/components/home.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // ruta a Home
        { path: '/home',component: Home},
        // ruta que redirige a la pagina principal si no se encuentra la ruta
        { path: '/:pathMatch(.*)*', redirect: '/home' }
    ]
});

export default router;