import Vue from "vue";
import Vuex from "vuex";
import evn from "./modules/datajs.js";
import evn1 from "./modules/datajs-2.js";
import login from "./methods/login.js";
import user from "./methods/cookie.js";
// import crumbs from "./methods/crumbs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    user,
    // crumbs,
    evn,
    evn1
  }
});
