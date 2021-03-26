<template>
    <div>
        <nav class="navbar">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item has-text-weight-bold">
                    Chacha Systems
                </router-link>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="https://versions.bulma.io/0.7.0/">
                        Home
                    </a>
                </div>
                <div class="navbar-end is-pulled-right">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="#">
                        FancyName
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <router-link to="/account" class="navbar-item" href="">
                                My Account
                            </router-link>
                            <hr class="navbar-divider">
                            <a href="#" @click.prevent="userLoggedOut" class="navbar-item">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import DashboardNav from '../components/DashboardNav'
export default {
    name: DashboardNav,

    methods:{
        ...mapActions(['LogOut']),
        async userLoggedOut(){
            await this.LogOut()
            this.$router.push('/')
        }

    }
}
</script>

<style scoped>
.navbar-end {
    margin-right: 0%;
}
</style>