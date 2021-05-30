<template>
  <div class="right">
    <news-tabs :news="rightNews" />
  </div>
</template>

<script>
import NewsTabs from "@/components/NewsTabs";
export default {
  data() {
    return {
      rightNews: [],
    };
  },
  components: {
    NewsTabs,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    list: {
      handler(list) {
        this.rightNews = [
          {
            label: "图片",
            top: list.slice(0, 3),
            body: list.slice(3, 6),
          },
          {
            label: "专栏",
            top: list.slice(6, 9),
            body: list.slice(9, 12),
          },
        ];
      },
    },
  },
};
</script>

<style>
.right {
  padding: 0 0.2rem;
}
</style>
