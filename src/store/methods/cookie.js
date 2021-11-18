import Cookie from "js-cookie";
export default {
  namespaced: true, //带命名空间的模块    ****不要忘了
  state: {
    token: ""
  },
  mutations: {
    // 设置并保存 token
    SET_TOKEN(state, val) {
      state.token = val;
      Cookie.set("token", val);
    },
    //删除  token
    CLEAR_TOKEN(state) {
      state.token = "";
      Cookie.remove("token");
    },
    // 获取  token
    GET_TOKEN(state) {
      state.token = Cookie.get("token");
    }
  }
};
