<template>
  <div class="content">
    <Left :list="leftList" class="content__left" />
    <Middle :list="midList" class="content__middle" />
    <Right :list="rightList" class="content__right" />
  </div>
</template>

<script>
import Left from "@/components/Left";
import Middle from "@/components/Middle";
import Right from "@/components/Right";
export default {
  components: {
    Left,
    Middle,
    Right,
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

<style lang="less" scoped>
.content {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &__left {
    width: 5.8rem;
  }
  &__middle {
    width: 7.2rem;
  }
  &__right {
    width: 7.2rem;
  }
}
</style>
