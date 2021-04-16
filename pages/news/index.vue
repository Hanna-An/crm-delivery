<template>
  <div class="container">
    <h2>Новости</h2>

    <div
      v-for="(item, index) in news"
      :key="index"
      class="news-small"
    >
      <img
        :src="item.image"
        class="news-small__image"
      >
      <div class="news-small__text">
        <div class="news-small__text-title">
          {{ item.title }}
        </div>
        <div class="news-small__text-preview">
          {{ item.short_description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: {}
    }
  },
  created () {
    this.getNews()
  },
  methods: {
    async getNews () {
      const response = await fetch('/news.json')
      const data = await response.json()
      this.news = data.data.news.items
    }
  }
}
</script>

<style scoped>
  .news-small {
    padding: 32px 12px;
    display: flex;
    border-bottom: 1px solid gray;
    margin-bottom: 22px;
  }

  .news-small__image {
    height: 65px;
    width: 100px;
    object-fit: cover;
  }

  .news-small__text {
    padding-left: 32px;
  }

  .news-small__text-title {
    font-weight: 700;
    font-size: 16px;
    color: #000;
    margin-bottom: 4px;
  }

  .news-small__text-preview {
    font-size: 14px;
    letter-spacing: 0.01em;
    opacity: 0.8;
    color: #000;
  }
</style>
