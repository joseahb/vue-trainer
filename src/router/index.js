import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from '../views/HomePage'
import LoginPage from '../views/auth/LoginPage'
import RegisterPage from '../views/auth/RegisterPage'
import DashboardPage from '../views/dashboard/DashboardPage'
import store from '../store'

const router = new VueRouter({
    mode: 'history',
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
        },
        {
            path: '/dashboard',
            component: DashboardPage
        }
    ]
 });
// Unauthenticated Users
router.beforeEach((to, from, next) => {
    if( to.matched.some( record => record.meta.requiresAuth)){
        if( store.getters.isAuthenticated) {
            next()
            return
        }
        next('/login')
    }
    else{
        next()
    }
})
// Authenticated Users

router.beforeEach(( to, from, next ) => {
    if (to.matched.some( (record) => record.meta.guest )){
        if (store.getters.isAuthenticated ) {
            next("/dashboard")
            return
        }
        next()
    }
    else{
        next()
    }
})

export default router