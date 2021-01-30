import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "lib-flexible";
// 懒加载
import vueLazyload from "vue-lazyload";
// mock  数据
import "./mock";

import BaiduMap from "vue-baidu-map";
import { addCookie, getCookie, delCookie } from "@/utils/cookie";
Vue.prototype.$cookieStore = {
  addCookie,
  getCookie,
  delCookie
};

Vue.use(vueLazyload, {
  preLoad: 1.3,
  error: require("./assets/da.png"),
  loading: require("./assets/loading.jpg"),
  attempt: 1
});
Vue.use(BaiduMap, {
  ak: "W5sheCw1AGukCfMGlk8ARuODYcQ2Nlm2"
});

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
