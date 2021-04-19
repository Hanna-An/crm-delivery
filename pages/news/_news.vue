<template>
  <div class="container py-7">
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
  async created () {
    const newsUrl = this.$route.params.news

    const data = await this.$axios.$get('/news.json')
    const news = data.data.news.items
    if (news && news.length > 0) {
      this.newsItem = news.find(elem => elem.url === newsUrl)
    }
  }
}
</script>
