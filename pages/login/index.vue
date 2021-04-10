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
          <label>Username (user@example.com)</label>
          <input type="email"   v-model="login.username"  />
        </div>
        <div>
          <label>Password (pass123)</label>
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
        username: '',
        password: ''
      },
      errors: []
    }
  },
  methods: {
    async userLogin () {
      this.errors = []
      if (this.login.username && this.login.password) {
        try {
          const response = await this.$axios.$post('api/login', this.login)
          this.$store.commit('addToken', response.accessToken)
          this.$router.push('/')
        } catch (err) {
          console.log({ err })
          this.errors = err.response.data.errors.map(a => a.msg || a)
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
