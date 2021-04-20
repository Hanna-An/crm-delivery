<template>
  <div class="container py-7">
    <h2 class="mb-4">
      {{ newsItem.title }}
    </h2>
    <div class="d-flex justify-end mb-4">
      <v-btn
        x-small
        nuxt
        :to="`/news/${newsItem.url}/edit`"
      >
        Редактировать
      </v-btn>
    </div>
    <div v-html="newsItem.content" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsItem: ''
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
      }
    }
  }
}
</script>
