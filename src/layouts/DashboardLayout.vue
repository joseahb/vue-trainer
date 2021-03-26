<template>
  <div>
        <section>
            <dashboard-nav />
        </section>
        <section>
            <div class="columns">
                <div class="column is-one-quarter">
                    <side-nav/>
                </div>
                <div class="column">
                    <router-view></router-view>
                </div>
            </div>

        </section>
      
  </div>
</template>

<script>
import DashboardNav from '../components/DashboardNav'
import SideNav from '../components/SideNav.vue'
export default {
    name: 'DashboardLayout',
    components: {
        DashboardNav,
        SideNav
    }
}
</script>

<style>

</style>