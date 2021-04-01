<template>
  <div class="container">
    <v-row>
      <v-col
        v-for="(shop, shopKey) in shops"
        :key="shopKey"
        cols="3"
      >
        <shops-card
        :shop="shop"
        />
      </v-col>
    </v-row>
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
      shops: []
    }
  },
  async created () {
    this.shops = await this.$axios.$get('/shops.json')
    console.log(this.shops)
  }
}
</script>

<style scoped>

</style>
