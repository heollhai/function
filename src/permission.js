import router from "./router";
import store from "./store";
//路由拦截
router.beforeEach((to, form, next) => {
  store.commit("user/GET_TOKEN"); //先获取 token
  const token = store.state.user.token;
  // 判断有没有 token
  if (!token && to.path !== "/login") {
    // 如果没有token 并且不是去登录页面   那么去到登录页面
    next("/login");
  } else {
    // 有  token   放行
    next();
  }
});
