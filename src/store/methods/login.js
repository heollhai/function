import Cookie from "js-cookie";
export default {
  namespaced: true, //带命名空间的模块    ****不要忘了
  state: {
    menu: []
  },
  mutations: {
    // 添加 动态路由 设置 cookie
    SET_MENU(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    // 清除cookie  清除路由菜单
    CLEAR_MENU(state) {
      state.menu = [];
      Cookie.remove("menu");
    },
    // 菜单栏
    ADD_MENU(state, router) {
      // 获取cookie;
      if (!Cookie.get("menu")) {
        return;
      }
      let menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      let currentMenu = [
        {
          path: "/",
          children: [],
          // redirect: "/Home",/
          component: () => import("@/views/login.vue")
        }
      ];
      // 把有无  children 的路由区分出来   分别拼接正确路径
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`);
            return item;
          });
          currentMenu[0].children.push(...item.children);
        } else {
          item.component = () => import(`@/views/${item.url}`);
          currentMenu[0].children.push(item);
        }
      });
      router.addRoutes(currentMenu);
    }
  }
};
