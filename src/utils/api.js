//引入封装好的axios
import request from "./requwst.js";

//获取  3级联动
export function liandong() {
  return request({
    url: "/liandong",
    method: "get"
  });
}
//获取测试数据
export function comments() {
  return request({
    url: "/comments",
    method: "get"
  });
}
//表格数据
export function biaoGe() {
  return request({
    url: "/biaoGe",
    method: "get"
  });
}
