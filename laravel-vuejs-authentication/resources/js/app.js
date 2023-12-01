import "bootstrap/dist/css/bootstrap.css"
import '../css/app.css';

import { createApp } from 'vue';
 
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import DashboardComponent from './components/DashboardComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AccountComponent from './components/AccountComponent.vue'
import LoginComponent from './components/auth/LoginComponent.vue'
 
const routes = [
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '/',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: '/account',
                component: AccountComponent,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
    .use(router)
    .mount('#app') 