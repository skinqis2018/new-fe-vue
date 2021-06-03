<template>
  <div class="search">
    <div class="search__left">
      <div class="search__icon" @click="homeback"></div>
      <div class="search__body">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="input-with-select"
          @keyup.enter.native="searchHandle"
        >
          <el-select v-model="chanel" slot="prepend" placeholder="频道">
            <!-- 体育0，娱乐1，行业2，教育3，法律4，社会5，国际6，科技7，财经8，经济9，军事10，时尚11，休闲12，音乐13 -->
            <el-option label="全部" value="all"></el-option>
            <el-option label="体育" value="0"></el-option>
            <el-option label="娱乐" value="1"></el-option>
            <el-option label="行业" value="2"></el-option>
            <el-option label="教育" value="3"></el-option>
            <el-option label="法律" value="4"></el-option>
            <el-option label="社会" value="5"></el-option>
            <el-option label="国际" value="6"></el-option>
            <el-option label="科技" value="7"></el-option>
            <el-option label="财经" value="8"></el-option>
            <el-option label="经济" value="9"></el-option>
            <el-option label="军事" value="10"></el-option>
            <el-option label="时尚" value="11"></el-option>
            <el-option label="休闲" value="12"></el-option>
            <el-option label="音乐" value="13"></el-option>
          </el-select>
          <el-button
            @click="searchHandle"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
      </div>
    </div>
    <div class="search__right">
      <div class="search__ad1"></div>
      <div class="search__ad2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chanel: "all",
      input: "",
    };
  },
  methods: {
    searchHandle() {
      this.$router.replace({
        path: `/list/${this.chanel}`,
        query: { key: this.input },
      });
    },
    homeback() {
      this.$router.push({ name: `Home` });
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__left {
    display: flex;
    align-items: center;
  }
  &__right {
    display: flex;
    align-items: center;
  }
  &__left {
    display: flex;
    align-items: center;
  }
  &__icon {
    width: 2.22rem;
    height: 0.8rem;
    margin: auto 0.4rem;
    background-image: url(//i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png);
    background-image: -webkit-image-set(url(//i1.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_1x.png) 1x,url(//i2.sinaimg.cn/dy/deco/2013/0329/logo/LOGO_2x.png) 2x);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &:hover {
      cursor: pointer;
    }
  }
  &__body {
    width: 8.6rem;
  }
  &__ad1 {
    width: 2.06rem;
    height: 1rem;
    background: url(//i0.sinaimg.cn/home/2014/1030/hxjzg103.jpg) 0 0 no-repeat;
    margin: 0;
    padding-right: 0.1rem;
  }
  &__ad2 {
    width: 2.66rem;
    height: 1rem;
    background: url(//n.sinaimg.cn/www/index/12377app.png) 0 0 no-repeat;
    margin: 0;
    padding-right: 0.1rem;
  }
}
</style>
<style>
.el-select .el-input {
  width: 2rem;
}
</style>
