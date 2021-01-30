<!-- 
 
	exentd  继承只能继承一个
	   
	mixins  混入可以有多个   如果混入多个 里面的值相同   会取最后一个 注册 混入的 值
 -->

<template>
  <div ref="box">
    {{ sayHello }}
    <el-button @click="secondFunction(9)">调用混入里面的方法</el-button>
    {{ value }}
    <div>我是vuex里面的count1{{ cont1 }}</div>
    <div>我是vuex里面的evnBaseInfo :{{ evnBaseInfo.eventName }}</div>
    <template v-for="itme in datas"> {{ itme }}--- </template>
    <div @click="load" :class="isCeiling" ref="buttonHeight">
      滚动实现吸顶
    </div>
    <div ref="boxContent" class="boxContent" style="overflow:auto">
      <template v-for="(item, index) in homeImgs">
        <img :key="index" v-lazy="item.img" alt="" />
      </template>
    </div>
  </div>
</template>
<script>
import { homeImg } from "@/api/home/index.js";
import { mapState } from "vuex";
import parent2 from "./component2.vue";
import parent3 from "./component3.vue";
import parent from "./component.vue";

// 触底加载	lnfiniteLoading
import {
  lnfiniteLoading,
  ceiling
} from "@/components/InfiniteLoading/index.js";
export default {
  name: "homeUse",
  extends: parent,
  mixins: [parent3, parent2, lnfiniteLoading, ceiling],
  data() {
    return {
      box: null,
      datas: {
        a: "0",
        b: "2",
        c: "3"
      },
      homeImgs: [],
      sayHello: "我继承父组件，，改变父组件的值"
    };
  },
  computed: {
    ...mapState({
      cont1: state => state.evn.count1
    }),
    ...mapState("evn1", ["evnBaseInfo"])
  },
  created() {
    this.load(9);
    this.showMessage(9);
    let data = {
      a: 1,
      b: 2,
      c: 3
    };
    // let List = [1, 2, 9, 4, 5, 6, 7, 8];
    for (var i in data) {
      console.log(i);
    }
    // for(var x of data){
    // 	console.log(x);
    // }
    // for (var i in List) {
    //   console.log(i, "i");
    // }
    // for (var i of List) {
    //   console.log(i, "iiiii");
    // }
  },
  methods: {
    //获取  首页图片
    load(num) {
      homeImg(num)
        .then(res => {
          this.homeImgs.push(...res.data.data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.boxContent {
  display: flex;
  justify-content: space-between;
  padding: 0 40px 0 40px;
  flex-wrap: wrap;
  img {
    width: 21%;
    height: 100%;
    margin: 20px;
  }
}
.infinite-list::-webkit-scrollbar {
  display: none;
}
// 吸顶
.ceiling {
  position: fixed;
  top: 0;
}
// 不吸顶
.noCeiling {
  position: relative;
  top: 0;
  // position: ab;
}
</style>
