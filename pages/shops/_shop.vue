<template>
  <div>
    <div class="blocks_test">
      <v-row class="blocks blocks_one ml-auto mr-auto mt-2">
        <v-col cols="3">
          <v-img
            :src="shop.img"
            max-height="280"
            contain
          />
        </v-col>
        <v-col cols="9">
          <v-row>
            <v-col
            cols="12"
            >
              <div>
                <h1>
                  {{ shop.title }}
                </h1>
              </div>
            </v-col>
            <v-col
              v-if="shop"
              cols="6"
            >
              <div>
                {{ shop.text }}
              </div>
            </v-col>
            <v-col
            cols="6"
            >
              <div>
                Время работы: {{ shop.schedule }}
              </div>
              <div>
                Адрес: {{ shop.address }}
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider class="separator"/>
    <v-row class="blocks ml-auto mr-auto mt-5">
      <v-col
        cols="8"
        v-if="shop"
      >
        <section class="container">
          <div v-if="isMounted">
            <yandex-map :coords="shop.coords" class="map ymap-container ">
              <ymap-marker markerId="123" marker-type="placemark" hint-content="element.hint" :coords="shop.coords"></ymap-marker>
            </yandex-map>
          </div>
        </section>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMounted: false,
    shop: ''
  }),
  async created () {
    const shopId = this.$route.params.shop
    const shops = await this.$axios.$get('/shops.json')
    if (shops && shops.length > 0) {
      this.shop = shops.find(elem => elem.title === shopId)
    }
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style scoped>

.ymap-container {
  height: 400px;
}
</style>
