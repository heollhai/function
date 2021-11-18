import Mock from "mockjs";
import homeApi from "./home";
import { routerList } from "./router";

// 设置200-2000毫秒延时请求数据
Mock.setup({
  timeout: "200-800"
});

// 首页相关
// 拦截的是 /home/getData
Mock.mock(/\/api\/home\/getHomeImg/, "get", homeApi.getStatisticalData);
Mock.mock(/\/api\/getMenu/, "post", routerList);
