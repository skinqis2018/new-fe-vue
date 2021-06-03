<template>
  <div class="channel">
    <div class="channel__mode">
      <div
        v-for="(chanel, index) in CHANELS.slice(0, 12)"
        :key="index"
        class="channel__item"
      >
        <router-link :to="`/list/${index}`">{{ chanel }}</router-link>
      </div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div
        v-for="(chanel, index) in CHANELS.slice(1, 13)"
        :key="index"
        class="channel__item"
      >
        <router-link :to="`/list/${index}`">{{ chanel }}</router-link>
      </div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div
        v-for="(chanel, index) in CHANELS.slice(2, 14)"
        :key="index"
        class="channel__item"
      >
        <router-link :to="`/list/${index}`">{{ chanel }}</router-link>
      </div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div
        v-for="(chanel, index) in CHANELS.slice(0, 12)"
        :key="index"
        class="channel__item"
      >
        <router-link :to="`/list/${index}`">{{ chanel }}</router-link>
      </div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode">
      <div
        v-for="(chanel, index) in CHANELS.slice(0, 12)"
        :key="index"
        class="channel__item"
      >
        <router-link :to="`/list/${index}`">{{ chanel }}</router-link>
      </div>
    </div>
    <el-divider class="channel__divider" direction="vertical"></el-divider>
    <div class="channel__mode2">
      <div class="channel__item">
        <router-link :to="`/list/12`">{{ CHANELS[12] }}</router-link>
      </div>
      <div class="channel__item">
        <router-link :to="`/list/13`">{{ CHANELS[13] }}</router-link>
      </div>
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
import { CHANELS } from "@/assets/js/const";
export default {
  data() {
    return {
      CHANELS,
    };
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #606266;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
}
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
    &:hover {
      cursor: pointer;
    }
  }
  &__divider {
    height: 1.3rem;
  }
}
</style>
