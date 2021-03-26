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
                            <router-link to="/logout" class="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/columns/basics/">
                                Logout
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

import DashboardNav from '../components/DashboardNav'
export default {
    name: DashboardNav
}
</script>

<style scoped>
.navbar-end {
    margin-right: 0%;
}
</style>