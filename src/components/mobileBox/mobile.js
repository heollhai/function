/* 
	这个没有自动吸附			正常
 */
const mobileBox = {
  directives: {
    //设置拖拽指令
    drag: {
      // 指令的定义
      bind: function(el) {
        let odiv = el; //获取当前元素
        odiv.onmousedown = e => {
          //   //算出鼠标相对元素的位置
          let disX = e.clientX - odiv.offsetLeft;
          let disY = e.clientY - odiv.offsetTop;
          document.onmousemove = e => {
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;
            //移动当前元素
            odiv.style.left = left + "px";
            odiv.style.top = top + "px";
          };
          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  }
};
/* 
	有自动吸附  点击边框移动是会自动移动到离边框一定距离
	
	*****		慎用
 */
const AutomaticAdsorptionBox = {
  directives: {
    //设置拖拽指令
    drag: {
      // 指令的定义
      bind: function(el) {
        let odiv = el; //获取当前元素
        odiv.onmousedown = e => {
          //   //算出鼠标相对元素的位置
          let disX = e.clientX - odiv.offsetLeft;
          let disY = e.clientY - odiv.offsetTop;
          document.onmousemove = e => {
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;
            //div靠近边缘自动吸附
            if (disX < 10) {
              disX = 0;
            } else if (
              disX >
              document.documentElement.clientWidth - odiv.offsetWidth
            ) {
              disX = document.documentElement.clienWidth - odiv.offsetWidth;
            }
            if (disY < 10) {
              disY = 0;
            } else if (
              disY >
              document.documentElement.clientHeight - odiv.offsetHeight
            ) {
              disY = document.documentElement.clientHeight - odiv.offsetHeight;
            }
            //移动当前元素
            odiv.style.left = left + "px";
            odiv.style.top = top + "px";
          };
          document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  }
};

export { mobileBox, AutomaticAdsorptionBox };
