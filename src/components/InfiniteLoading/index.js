// 触底加载
const lnfiniteLoading = {
  mounted() {
    // 监听这个dom的scroll事件
    window.addEventListener("scroll", this.debounce(this.scrollBottom, 300));
  },
  methods: {
    // 获取高度
    scrollBottom() {
      let clientHeight = document.documentElement.clientHeight; //获取html的可视高度
      let scrollTop = document.documentElement.scrollTop; //获取html的滚动高度
      let scrollHeight = document.documentElement.scrollHeight; //获取文档的实际高度
      // this.$nextTick(function() {
      //   let height = this.$refs.button.offsetHeight;
      //   console.log(scrollTop, "滚动高度", height);
      // });

      // console.log(
      //   scrollHeight,
      //   "实际高度",
      //   scrollTop,
      //   "滚动高度",
      //   clientHeight,
      //   "可视高度"
      // );
      if (clientHeight + scrollTop >= scrollHeight - 300) {
        // 触底后加载数据的方法		自己在外面定义
        this.load(4);
      }
    },
    // 防抖
    debounce(fn, delay) {
      let timer = null;
      return function() {
        if (timer) {
          clearTimeout(timer);
          timer = setTimeout(fn, delay);
        } else {
          timer = setTimeout(fn, delay);
        }
      };
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollBottom);
  }
};
// 吸顶
const ceiling = {
  data() {
    return {
      isCeiling: "onCeiling" //是否吸顶
    };
  },
  mounted() {
    // handleScroll为页面滚动的监听回调
    window.addEventListener("scroll", this.debounce(this.handleScroll, 300));
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop; //获取html的滚动高度
      // // 获取需要  吸顶元素的
      this.$nextTick(function() {
        let height = this.$refs.buttonHeight.getBoundingClientRect().top;
        console.log(scrollTop, "滚动高度", height);
        if (scrollTop - height > 0) {
          this.isCeiling = "ceiling";
        } else {
          this.isCeiling = "onCeiling";
        }
      });
    }
  },
  // 防抖
  debounce(fn, delay) {
    let timer = null;
    return function() {
      if (timer) {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
      } else {
        timer = setTimeout(fn, delay);
      }
    };
  }
};
export { lnfiniteLoading, ceiling };
