<template>
  <el-tabs type="card">
    <el-tab-pane v-for="item in news" :key="item.label" :label="item.label">
      <div class="news_tabs__top" v-if="item.top && item.top.length > 0">
        <div
          class="news_tabs__top_item"
          v-for="pic in item.top"
          :key="pic.newsId"
          @click="clickHandle(pic)"
        >
          <img :src="pic.url" />
          <span>{{ pic.title }}</span>
        </div>
      </div>
      <div class="news_tabs__body">
        <el-link
          type="primary"
          :underline="false"
          icon="el-icon-info"
          v-for="text in item.body"
          @click="clickHandle(text)"
          :key="text.newId"
        >
          {{ text.title }}
        </el-link>
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
  inject: ["clickHandle"],
};
</script>

<style lang="less" scoped>
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
      &:hover {
        cursor: pointer;
      }
    }
    span {
      width: 2.1rem;
      text-align: center;
      color: #fff;
      height: 0.4rem;
      line-height: 0.4rem;
      display: block;
      background: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        cursor: pointer;
      }
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
      text-decoration: none;
      font-size: 0.28rem;
      max-width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
