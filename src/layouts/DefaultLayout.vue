<template>
  <div>
      <home-nav/>
      <router-view/>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue'
export default {
  components: { HomeNav },
    name: 'DefaultLayout'
}
</script>

<style>

</style>