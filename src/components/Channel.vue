<template>
  <div class="channel">
    <div class="channel__mode">
      <div v-for="i in 12" :key="i" class="channel__item">新闻</div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div v-for="i in 12" :key="i" class="channel__item">新闻</div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div v-for="i in 12" :key="i" class="channel__item">新闻</div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div v-for="i in 12" :key="i" class="channel__item">新闻</div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div v-for="i in 12" :key="i" class="channel__item">新闻</div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode2">
      <div class="channel__item">交易</div>
      <div class="channel__item">理财</div>
      <el-dropdown placement="bottom">
        <span class="el-dropdown-link">
          更多<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>政务</el-dropdown-item>
          <el-dropdown-item divided>车险</el-dropdown-item>
          <el-dropdown-item divided>页游</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.channel {
  width: 100%;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &__mode {
    width: 3.48rem;
    display: flex;
    flex-wrap: wrap;
  }
  &__mode2 {
    width: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    width: 0.5rem;
    margin-left: 0.26rem;
    line-height: 0.52rem;
    text-align: center;
    white-space: nowrap;
  }
  &__divider {
    height: 1.3rem;
  }
}
</style>
