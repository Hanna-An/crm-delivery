<template>
  <div class="container">
      <v-row>
        <v-col
          v-for="(shop, shopKey) in subarray[page - 1]"
          :key="shopKey"
          cols="3"
        >
          <shops-card
            :shop="shop"
          />
        </v-col>
      </v-row>
      <div class="text-center mt-4">
        <v-pagination
          v-model="page"
          :length="subarray.length"
          circle
        ></v-pagination>
      </div>
    </div>
</template>

<script>
import ShopsCard from '~/components/ShopsCard'

export default {
  components: {
    ShopsCard
  },
  name: 'index',
  data () {
    return {
      shops: [],
      subarray: [],
      page: 1
    }
  },
  async created () {
    this.shops = await this.$axios.$get('/shops.json')
    console.log(this.shops)
    const array = this.shops
    const size = 8
    const arr = []
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      arr[i] = array.slice((i * size), (i * size) + size)
    }
    this.subarray = arr
    console.log(this.subarray)
  }
}
</script>

<style scoped>

</style>
