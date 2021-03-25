<template>
  <div class="container">
    <div
      v-if="subarray.length > 0"
    >
      <h1 class="title">
        <a href="#" class="delete-item" @click.prevent="logout">Logout</a>
      </h1>
      <div
        v-for="(obj, index) in subarray[page]"
        :key="index + obj.id"
      >
        {{ index }}id: {{ obj.id }} First name: {{ obj.first_name }} Last name: {{ obj.last_name }} Sex: {{
          obj.gender
        }} IP: {{ obj.ip_address }} Email: {{ obj.email }}
        <button>Ред</button>
        <button
          @click="deleteItem(obj.id)"
        >
          Удл
        </button>
      </div>
      <button
        @click="page--"
      >
        -
      </button>
      <span
        v-for="key in subarray.length"
        :key="key + Math.floor(Math.random() * 1000000)"
        @click="page = key - 1"
      >
        {{ key }}
      </span>
      <button
        @click="page++"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      objects: [],
      subarray: [],
      page: 0
    }
  },
  async created () {
    this.objects = await this.$axios.$get('/users.json')
    const array = this.objects
    const size = 10
    const arr = []
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      arr[i] = array.slice((i * size), (i * size) + size)
    }
    this.subarray = arr
  },
  methods: {
    logout () {
      this.$store.commit('removeToken')
      this.$router.push('/login')
    },
    deleteItem (id) {
      for (let i = 0; i <= this.objects.length; i++) {
        console.log(this.objects.id)
        // нужно доделать удаление
      }
    }
  }
}
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
