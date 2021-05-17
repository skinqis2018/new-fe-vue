<template>
  <div id="app">
    <el-container>
      <el-header height=".82rem">
        <Header />
      </el-header>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
export default {
  components: {
    Header,
    Main,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: #606266;
  font-size: 14px;
}
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
  margin: 0;
  padding: 0;
}
</style>
