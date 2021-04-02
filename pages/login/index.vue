<template>
  <div class="login-page">
    <div class="form">
      <p v-if="errors.length">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      </p>
      <form @submit.prevent="userLogin">
        <div>
          <label>Username</label>
          <input type="email"   v-model="login.username"  />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model="login.password"  />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        username: 'user@example.com',
        password: 'pass123'
      },
      errors: []
    }
  },
  methods: {
    async userLogin () {
      this.errors = []
      if (this.login.username && this.login.password) {
        try {
          const response = await this.$axios.$get('/login_user.json')
          console.log(response)
          if (
            this.login.username === response.username &&
            this.login.password === response.password
          ) {
            this.$store.commit('addToken', response.token)
            this.$router.push('/')
          } else {
            this.errors.push('Wrong username or password')
          }
        } catch (err) {
          console.log(err)
        }
      }

      if (!this.login.username) {
        this.errors.push('Username is required')
      }
      if (!this.login.password) {
        this.errors.push('Password is required')
      }
    }
  }
}
</script>

<style scoped>

</style>
