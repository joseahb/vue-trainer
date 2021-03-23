import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from '../views/HomePage'
import LoginPage from '../views/auth/LoginPage'
import RegisterPage from '../views/auth/RegisterPage'



export default new VueRouter({
    routes: [
        {
          path: "/",
          component: HomePage,
        },
        {
            path: "/login",
            component: LoginPage
        },
        {
            path: "/register",
            component: RegisterPage
        }
    ]
 }
 );