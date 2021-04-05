<template>
  <nuxt-link :to="`/shops/${shop.title}`">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 6"
          class="mx-auto pa-3"
          min-height="300"
        >
          <v-img
            class="white--text align-end"
            max-height="150"
            :src="shop.img"
          >
          </v-img>

          <v-card-text class="text--primary">
            <div>{{ shop.title }}</div>
            <div>{{ shop.address }}</div>
            <div>{{ shop.schedule }}</div>
          </v-card-text>

        </v-card>
      </template>
    </v-hover>
  </nuxt-link>
</template>

<script>
export default {
  props: ['shop']
}
</script>

<style scoped>
.text {
  text-decoration: none;
}
</style>
