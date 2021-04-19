<template>
  <div class="container">
    <h2>Новости</h2>
    <v-row
      v-for="(item, index) in news"
      :key="index"
      class="news-small py-8 px-3"
      no-gutters
    >
      <v-col
        cols="12"
        sm="2"
      >
        <img
          :src="item.image"
          class="news-small__image"
        >
      </v-col>
      <v-col
        cols="11"
        sm="9"
        class="pl-sm-8 pt-6 pt-sm-0"
      >
        <nuxt-link
          :to="`/news/${item.url}`"
          class="news-small__text-title text--black font-weight-bold mb-2"
        >
          {{ item.title }}
        </nuxt-link>
        <div class="news-small__text-preview text--black">
          {{ item.short_description }}
        </div>
      </v-col>
      <v-col
        cols="1"
        class="text-right pt-6 pt-sm-0"
      >
        <v-btn
          icon
          @click.stop="dialog = true, itemId = item._id"
        >
          <v-icon>
            mdi-trash-can-outline
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog
      v-model="dialog"
      max-width="290"
      light
    >
      <v-card>
        <v-card-title class="text-subtitle-1">
          Удалить новость?
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Нет
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteNewsItem()"
          >
            Да
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: [],
      dialog: false,
      itemId: null
    }
  },
  created () {
    this.getNews()
  },
  methods: {
    async getNews () {
      const data = await this.$axios.$get('/news.json')
      this.news = data.data.news.items
    },
    async deleteNewsItem () {
      const id = this.itemId
      this.dialog = false
      await this.$axios.delete(`/api/news/${id}/delete`)

      for (let index = 0; index < this.news.length; index++) {
        const indexInArray = this.news.findIndex(item => item._id === id)

        if (indexInArray > -1) {
          this.news.splice(indexInArray, 1)
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .news-small {
    border-bottom: 1px solid gray;
  }

  .news-small__image {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .news-small__text-title {
    font-size: 16px;
    text-decoration: none;
    color: #000000;
    &:hover {
      color: darkblue;
    }
  }

  .news-small__text-preview {
    font-size: 14px;
    letter-spacing: 0.01em;
    opacity: 0.8;
  }
</style>
