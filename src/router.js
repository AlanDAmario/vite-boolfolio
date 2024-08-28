import { createRouter, createWebHistory } from "vue-router";

import Guest from "./pages/Guest.vue";
import Login from "./pages/Login.vue";
import Projectlist from "./pages/Projectlist.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/",  name: 'HomeGuest', component: Guest },
        { path: "/login",name: 'Login', component: Login },
        { path: "/projectlist",name: 'ProjectList', component: Projectlist },
    ],
});

export {router};