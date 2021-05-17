<template>
  <div class="main">
    <Search />
    <Channel />
    <Content />
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
};
</script>

<style lang="less" scoped></style>
