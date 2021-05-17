<template>
  <div class="content">
    <Left class="content__left" />
    <Middle class="content__middle" />
    <Right class="content__right" />
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
