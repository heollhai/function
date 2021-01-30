import request from "@/utils/requwst.js";

export function homeImg(num) {
  return request({
    url: "/home/getHomeImg",
    method: "get",
    params: {
      num: num
    }
  });
}
