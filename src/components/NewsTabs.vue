<template>
  <el-tabs type="card">
    <el-tab-pane v-for="item in news" :key="item.label" :label="item.label">
      <div class="news_tabs__top" v-if="item.top && item.top.length > 0">
        <div class="news_tabs__top_item" v-for="pic in item.top" :key="pic.img">
          <img :src="pic.img" />
          <span>{{ pic.name }}</span>
        </div>
      </div>
      <div class="news_tabs__body">
        <a v-for="(text, index) in item.body" :key="index">
          ·{{ text.title }}
        </a>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
list-a a:link {
  color: #122e67;
  text-decoration: none;
}
.list-a a.list-a a:hover,
.list-a a:active {
  color: #ff8400;
  text-decoration: underline;
}
.news_tabs {
  &__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 2.1rem;
      aspect-ratio: auto 105 / 70;
      height: 1.4rem;
    }
    span {
      width: 2.1rem;
      text-align: center;
      color: #fff;
      height: 0.4rem;
      line-height: 0.4rem;
      display: block;
      background: #000;
    }
    &-item {
      width: 2.1rem;
      height: 1.4rem;
    }
  }
  &__body {
    padding-top: 0.14rem;
    text-align: left;
    a {
      display: block;
      height: 0.5rem;
      line-height: 0.5rem;
      color: #122e67;
      text-decoration: none;
      font-size: 0.28rem;
    }
  }
}
</style>
