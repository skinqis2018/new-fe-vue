import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import httpRequest from "@/utils/httpRequest";
import cloneDeep from "lodash/cloneDeep";
import VueCookie from "vue-cookie";

Vue.config.productionTip = false;
Vue.prototype.$http = httpRequest;
// 保存整站vuex本地储存初始状态

window.SITE_CONFIG = {};

// api接口请求地址
window.SITE_CONFIG["baseUrl"] = "http://localhost:8080/renren-fast";

// cdn地址 = 域名 + 版本号
window.SITE_CONFIG["domain"] = "./"; // 域名
window.SITE_CONFIG["version"] = ""; // 版本号(年月日时分)
window.SITE_CONFIG["storeState"] = cloneDeep(store.state);
Vue.use(ElementUI);
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
