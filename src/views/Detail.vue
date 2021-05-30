<template>
  <div>
    <div class="detail" v-loading.fullscreen.lock="loading">
      <div class="detail__title">{{ body.title }}</div>
      <div class="detail__content">
        <img align="left" class="detail__poster" :src="body.url" />
        {{ body.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      loading: true,
      body: {},
    };
  },
  mounted() {
    this.id = Number(this.$route.params.id);
    this.$http({
      url: this.$http.adornUrl(`/generator/news/info/${this.id}`),
      method: "get",
      params: this.$http.adornParams(),
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.body = data.news;
        this.loading = false;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 90%;
  margin: auto;
  text-align: center;
  &__title {
    font-size: 38px;
    color: #4d4f53;
    line-height: 50px;
    padding: 34px 0;
  }
  &__content {
    text-align: left;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 32px;
    float: left;
    clear: both;
  }
  &__poster {
    display: inline-block;
    max-width: 80%;
    margin: 0.6rem;
  }
}
</style>
