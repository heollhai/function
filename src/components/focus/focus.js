// 多行文本框获取焦点
const focusTextarea = {
  directives: {
    textareaFocus: {
      inserted: function(el) {
        el.getElementsByTagName("textarea")[0].focus();
      },
      update: function(el) {
        el.getElementsByTagName("textarea")[0].focus();
      }
    }
  }
};
// input  获取焦点
const focusText = {
  directives: {
    textFocus: {
      inserted: function(el) {
        el.querySelector("input").focus();
      },
      update: function(el) {
        el.querySelector("input").focus();
      }
    }
  }
};
export { focusTextarea, focusText };
