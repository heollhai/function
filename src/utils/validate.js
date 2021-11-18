import { Message } from "element-ui";

/**
 * APi接口返回效验
 * @param {Object} data
 * @param {String} msg
 * **/
export function apiValidate(data, message) {
  return new Promise(resolve => {
    const { code, msg } = data;
    if (code === 2000) {
      msg || message ? Message.success(msg || message) : "";
      resolve();
    } else {
      Message.warning(msg);
    }
  });
}
