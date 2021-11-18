import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login.vue";

Vue.use(VueRouter);

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "VideoManage" */ "@/views/error.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
