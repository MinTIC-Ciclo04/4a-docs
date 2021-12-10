import gql from "graphql-tag";
import { createRouter, createWebHistory } from "vue-router";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Reserva from './components/Reserva.vue'
import Pasadia from './components/Pasadia.vue'

const routes = [{
        path: '/user/logIn',
        name: "logIn",
        component: LogIn,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/signUp',
        name: "signUp",
        component: SignUp,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/home',
        name: "home",
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/user/reserva',
        name: "reserva",
        component: Reserva,
        meta: { requiresAuth: true }
    },
    {
        path: '/user/pasadia',
        name: "pasadia",
        component: Pasadia,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const apolloClient = new ApolloClient({
    link: createHttpLink({ uri: 'http://api-gate-way.herokuapp.com/' }),
    cache: new InMemoryCache()
})

async function isAuth() {
    if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
        return false;
    }
    if (is_auth) return { name: "home" };
    return { name: "logIn" };
}

export default router;