import request from "@/utils/requwst.js";

//获取首页菜单栏
export function getMenu() {
  return request({
    url: "getMenu",
    method: "post"
  });
}
