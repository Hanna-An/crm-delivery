<template>
  <div class="container pt-6 pb-10">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="pr-md-6"
      >
        <v-form>
          <v-text-field
            v-model="title"
            name="title"
            label="Заголовок новости"
            outlined
          />
          <v-textarea
            v-model="description"
            name="content"
            label="Текст"
            auto-grow
            outlined
          />
          <v-btn @click="saveNews">
            Сохранить
          </v-btn>
        </v-form>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pl-md-6 pt-8 pt-md-0"
      >
        <p class="font-weight-bold">
          Предпросмотр:
        </p>
        <h2 class="mb-4">
          {{ title }}
        </h2>
        <div v-html="description" />
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      timeout="4000"
      color="success"
      outlined
    >
      Изменения сохранены
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsItem: '',
      title: '',
      description: '',
      snackbar: false
    }
  },
  created () {
    this.getNewsItem()
  },
  methods: {
    async getNewsItem () {
      const newsUrl = this.$route.params.slug

      const data = await this.$axios.$get('/news.json')
      const news = data.data.news.items
      if (news && news.length > 0) {
        this.newsItem = news.find(elem => elem.url === newsUrl)
        this.title = this.newsItem.title
        this.description = this.newsItem.content
      }
    },
    async saveNews () {
      await this.$axios.$post('/api/news', {
        title: this.title,
        description: this.description
      })
      this.snackbar = true
    }
  }
}
</script>
