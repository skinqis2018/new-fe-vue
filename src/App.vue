<template>
  <div id="app">
    <el-container>
      <el-header height=".82rem">
        <Header
          @loginShow="loginShow"
          @registShow="registShow"
          @logout="logout"
        />
      </el-header>
      <el-main>
        <Main />
      </el-main>
    </el-container>

    <el-dialog
      title="用户登录"
      :visible.sync="loginVisible"
      @close="closeLogin"
      width="6rem"
      center
    >
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeLogin">取 消</el-button>
        <el-button type="primary" @click="dataFormSubmit">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="用户注册"
      :visible.sync="registVisible"
      @close="closeRregist"
      width="6rem"
      center
    >
      <el-form
        :model="regist"
        :rules="dataRule"
        ref="regist"
        @keyup.enter.native="dataFormSubmit()"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="regist.userName" placeholder="登录帐号"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :class="{ 'is-required': !regist.id }"
        >
          <el-input
            v-model="regist.password"
            type="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="comfirmPassword"
          :class="{ 'is-required': !regist.id }"
        >
          <el-input
            v-model="regist.comfirmPassword"
            type="password"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="regist.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="regist.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="状态" size="mini" prop="status">
          <el-radio-group v-model="regist.status">
            <el-radio :label="0">禁用</el-radio>
            <el-radio :label="1">正常</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeRregist">取 消</el-button>
        <el-button type="primary" @click="registFormSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { getUUID, clearLoginInfo } from "@/utils";
import { isEmail, isMobile } from "@/utils/validate";
export default {
  data() {
    var validatePassword = (rule, value, callback) => {
      if (!this.dataForm.id && !/\S/.test(value)) {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    var validateComfirmPassword = (rule, value, callback) => {
      if (!this.dataForm.id && !/\S/.test(value)) {
        callback(new Error("确认密码不能为空"));
      } else if (this.dataForm.password !== value) {
        callback(new Error("确认密码与密码输入不一致"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (!isEmail(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if (!isMobile(value)) {
        callback(new Error("手机号格式错误"));
      } else {
        callback();
      }
    };
    return {
      loginVisible: false,
      registVisible: false,
      form: {
        username: "",
        password: "",
      },
      regist: {
        id: 0,
        userName: "",
        password: "",
        comfirmPassword: "",
        salt: "",
        email: "",
        mobile: "",
        roleIdList: [],
        status: 1,
      },
      dataRule: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [{ validator: validatePassword, trigger: "blur" }],
        comfirmPassword: [
          { validator: validateComfirmPassword, trigger: "blur" },
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { validator: validateEmail, trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { validator: validateMobile, trigger: "blur" },
        ],
      },
    };
  },
  components: {
    Header,
    Main,
  },
  methods: {
    loginShow() {
      this.loginVisible = true;
    },
    closeLogin() {
      this.loginVisible = false;
    },
    registShow() {
      this.registVisible = true;
    },
    closeRregist() {
      this.registVisible = false;
    },
    logout() {
      this.$confirm("确认退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          debugger;
          clearLoginInfo();
        })
        .catch(() => {});
    },
    registFormSubmit() {
      this.$refs["regist"].validate((valid) => {
        if (valid) {
          this.$http({
            url: this.$http.adornUrl(`/sys/user/save`),
            method: "post",
            data: this.$http.adornData({
              userId: this.regist.id || undefined,
              username: this.regist.userName,
              password: this.regist.password,
              salt: this.regist.salt,
              email: this.regist.email,
              mobile: this.regist.mobile,
              status: this.regist.status,
              roleIdList: this.regist.roleIdList,
            }),
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.visible = false;
                  this.$emit("refreshDataList");
                },
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    dataFormSubmit() {
      this.$http({
        url: this.$http.adornUrl("/sys/login"),
        method: "post",
        data: this.$http.adornData({
          username: this.form.userName,
          password: this.form.password,
          uuid: this.form.uuid,
          platform: 0,
        }),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$cookie.set("token", data.token);
          this.getUserInfo();
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    getUserInfo() {
      this.$http({
        url: this.$http.adornUrl("/sys/user/info"),
        method: "get",
        params: this.$http.adornParams(),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.loading = false;
          this.userId = data.user.userId;
          this.userName = data.user.username;
          this.closeLogin();
        }
      });
    },
  },
  created() {
    this.form.uuid = getUUID();
  },
  mounted() {
    let token = Vue.cookie.get("token");
    if (token) {
      this.getUserInfo();
    }
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
