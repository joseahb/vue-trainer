<template>
  <div>
 <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form @submit.prevent="loginUser" class="box">
            <div class="field">
              <label for="" class="label">User id</label>
              <div class="control has-icons-left">
                <validation-provider>
                  <input type="text" placeholder="username or Email" class="input" v-model="form.user_id" aria-placeholder="Username or email<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </validation-provider>
               
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <validation-provider>
                  <input type="password" placeholder="*******" class="input" v-model="form.password" >
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </validation-provider>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button type="submit" class="button is-success">
                Login
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
import { mapActions } from 'vuex'
export default {
    name: 'LoginPage',
    components: {
      ValidationProvider
    },
    data: function() {
      return {
        form : {
          user_id: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions(['LogIn']),
      async loginUser(){
        const User = new FormData
        User.append('user_id', this.form.user_id)
        User.append('password', this.form.password)
        try{
          await this.LogIn(User)
          this.$router.push("/dashboard")
        }
        catch(error){
          this.showError = true
        }
      }
    }

}
</script>

<style>

</style>