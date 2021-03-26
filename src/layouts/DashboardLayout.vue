<template>
  <div>
      <dashboard-nav />
    <router-view></router-view>
  </div>
</template>

<script>
import DashboardNav from '../components/DashboardNav'
export default {
    name: 'DashboardLayout',
    components: {
        DashboardNav
    }
}
</script>

<style>

</style>