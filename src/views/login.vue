<template>
  <div class="login">
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getMenu } from "@/api/login/index";
import { apiValidate } from "@/utils/validate";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations("login", ["SET_MENU", "CLEAR_MENU", "ADD_MENU"]),
    ...mapMutations("user", ["SET_TOKEN"]),
    //登录
    login() {
      //获取菜单
      getMenu().then(res => {
        apiValidate(res).then(() => {
          const { data, token } = res;
          //先清除 cookie 避免二次登录
          this.CLEAR_MENU();
          //保存 token
          this.SET_TOKEN(token);
          //把菜单设置单 state 中保存
          this.SET_MENU(data);
          //把路由放到 this.touter 中去
          this.ADD_MENU(this.$router);
          //跳转到首页
          this.$router.push("/");
        });
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
