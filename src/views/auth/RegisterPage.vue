<template>
<div>
<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-7-tablet is-6-desktop is-5-widescreen">
          <form @submit.prevent="registerUser" class="box">
            <div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                <validation-provider rules='username' name="username" v-slot='{errors}' >
                  <input type="text" placeholder="e.g. bobmore" class="input" v-model="form.username" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Full name</label>
              <div class="control has-icons-left">
                <validation-provider rules="fullname" name="Full name" v-slot='{ errors }' >
                  <input type="text" placeholder="e.g. Bob More Reily" class="input" v-model="form.fullName" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <validation-provider v-slot="{ errors }">
                  <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" v-model="form.email" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Mobile</label>
              <div class="control has-icons-left">
                <validation-provider v-slot="{ errors }">
                  <input type="number" placeholder="e.g. 0712345678" class="input" v-model="form.mobile" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                  </span>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <validation-provider v-slot="{ errors }">
                    <input type="password" placeholder="*******" class="input" v-model="form.password" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    <span>{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="field">
              <button type="submit" class="button is-success">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import '../../utils/defaults';

import { mapActions } from "vuex"

export default {
  name: 'RegisterPage',
  components: {ValidationProvider},
  data: function(){
    return{ 
      form: {
        username : '',
        fullName: '',
        email: '',
        mobile: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions(['Register']),
    async registerUser(){
      console.log("I've been called!");
      try {
        await this.Register(this.form)
        this.$router.push('/dashboard')
      } catch (error) {
        this.ShowError = true
      }
    }
  }
  
}
</script>

<style>

</style>