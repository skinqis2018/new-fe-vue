<template>
  <div class="header">
    <div class="header__left">
      <div class="header__item">
        <el-link>设为首页</el-link>
      </div>
      <div class="header__item">
        <el-link>手机新浪网</el-link>
      </div>
      <div class="header__item">
        <el-dropdown class="header__item_box">
          <span class="el-dropdown-link">
            移动客户端<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in mobileOptions"
              :key="index"
              :divided="index !== 0"
            >
              <el-link :underline="false" :href="item.link" target="_blank">{{
                item.name
              }}</el-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="header__right">
      <div v-if="Number(userId) > 0" class="header__item">
        <span>您好，</span>
      </div>
      <div v-if="Number(userId) > 0" class="header__item">
        <el-link>{{ userName }}</el-link>
      </div>
      <div
        v-if="Number(userId) > 0"
        @click="$emit('logout')"
        class="header__item"
      >
        <el-link>退出</el-link>
      </div>
      <div
        v-if="Number(userId) == 0"
        class="header__item"
        @click="$emit('loginShow')"
      >
        <el-link type="primary">登录</el-link>
      </div>
      <div
        v-if="Number(userId) == 0"
        class="header__item"
        @click="$emit('registShow')"
      >
        <el-link type="primary">注册</el-link>
      </div>
      <div class="header__item">
        <el-dropdown class="header__item_box">
          <span class="el-dropdown-link">
            <el-badge value="new" class="item">
              微博<i class="el-icon-arrow-down el-icon--right"></i>
            </el-badge>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header__item">
        <el-dropdown class="header__item_box">
          <span class="el-dropdown-link">
            博客<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header__item">
        <el-dropdown class="header__item_box">
          <span class="el-dropdown-link">
            邮箱<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
            <el-dropdown-item divided>新浪微博</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header__item">
        <el-link>网站导航</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import { MOBILEOPTIONS } from "@/assets/js/const";
export default {
  data() {
    return {
      activeIndex: "1",
      mobileOptions: MOBILEOPTIONS,
    };
  },
  computed: {
    userId: {
      get() {
        return this.$store.state.user.id;
      },
      set(val) {
        this.$store.commit("user/updateId", val);
      },
    },
    userName: {
      get() {
        return this.$store.state.user.name;
      },
      set(val) {
        this.$store.commit("user/updateName", val);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 0.82rem;
  border-top: 3px solid #ff8500;
  border-bottom: 1px solid #edeef0;
  background-color: #fcfcfc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #606266;
  font-size: 14px;
  &__item {
    float: left;
    height: 100%;
    padding: 0 0.2rem;
    a,
    &-box {
      border: 1px solid #fcfcfc;
      border-width: 0 1px;
      color: #4c4c4c;
      display: inline-block;
      line-height: 16px;
      cursor: pointer;
      position: relative;
      z-index: 9999;
      padding: 0 2px 0 0;
    }
  }
}
</style>
