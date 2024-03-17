
import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
           path: "/" ,
           component: HomePage
        },
        {
            path: "/about" ,
            component: AboutPage
         },
         { 
            path: "/about/:id",
            component: () => import("./views/AboutCardPage.vue")
         }

    ]
})
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
