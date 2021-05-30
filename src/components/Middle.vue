<template>
  <div class="middle">
    <news-tabs :news="middleNews" />
  </div>
</template>

<script>
import NewsTabs from "@/components/NewsTabs";
export default {
  data() {
    return {
      middleNews: [],
    };
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
        this.middleNews = [
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
  components: {
    NewsTabs,
  },
};
</script>

<style>
.middle {
  padding: 0 0.2rem;
}
</style>
