<template>
  <el-dialog title="用户登录" :visible.sync="loginVisible" @close="close">
    <el-form :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-input
        v-model="form.password"
        type="password"
        placeholder="密码"
      ></el-input>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="dataFormSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { getUUID } from "@/utils";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    loginVisible(v) {
      return v;
    },
  },
  methods: {
    close() {
      this.$emit("closeLogin");
    },
    dataFormSubmit() {
      this.$http({
        url: this.$http.adornUrl("/sys/login"),
        method: "post",
        data: this.$http.adornData({
          username: this.form.userName,
          password: this.form.password,
          uuid: this.form.uuid,
        }),
      }).then(({ data }) => {
        console.log("ok:::", data);
      });
    },
  },
  created() {
    this.form.uuid = getUUID();
  },
};
</script>

<style></style>
