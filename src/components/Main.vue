<template>
  <div class="main">
    <Search />
    <Channel />
    <Content :leftList="leftList" :midList="midList" :rightList="rightList" />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Channel from "@/components/Channel";
import Content from "@/components/Content";
export default {
  components: {
    Search,
    Channel,
    Content,
  },
  props: {
    leftList: {
      type: Array,
      default: () => [],
    },
    midList: {
      type: Array,
      default: () => [],
    },
    rightList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped></style>
