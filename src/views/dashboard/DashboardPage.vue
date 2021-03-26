<template>
  <div>
    <div class="columns">
      <div class="column">
      <breadcrumb/>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Credits</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Purchases</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Users</p>
              <p class="title">456K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Services</p>
              <p class="title">789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
export default {
  components: { Breadcrumb },
    name: 'DashboardPage',
}
</script>

<style>

</style>