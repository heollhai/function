import Mock from "mockjs";
export function routerList() {
  return {
    code: 2000,
    token: Mock.Random.guid(),
    data: [
      {
        //vuex
        path: "/vuexUse",
        name: "vuexUse",
        meat: {
          name: "vuex"
        },
        component: () =>
          import(
            /* webpackChunkName: "vuexUse" */
            "../views/vux的基本使用/index.vue"
          )
      },
      {
        //公共方法的使用
        path: "/componentsUse",
        name: "componentsUse",
        meat: {
          name: "公共方法的使用"
        },
        component: () =>
          import(
            /* webpackChunkName: "componentsUse" */
            "../views/公共方法的使用/index.vue"
          )
      },
      {
        //定制行
        path: "/customization",
        name: "Customization",
        meat: {
          name: "定制行"
        },
        component: () =>
          import(
            /* webpackChunkName: "customization" */
            "../views/customization/index.vue"
          )
      },
      {
        //目的地
        path: "/destination",
        name: "Destination",
        meat: {
          name: "目的地"
        },
        component: () =>
          import(
            /* webpackChunkName: "destination" */
            "../views/destination/index.vue"
          )
      },
      {
        //发现页
        path: "/discover",
        name: "Discover",
        meat: {
          name: "发现页"
        },
        component: () =>
          import(
            /* webpackChunkName: "discover" */
            "../views/动态表格使用/index.vue"
          )
      },
      {
        //我的
        path: "/my",
        name: "My",
        meat: {
          name: "我的"
        },
        component: () =>
          import(/* webpackChunkName: "my" */ "../views/my/index.vue")
      },
      {
        //正则使用
        path: "/regular",
        name: "Regular",
        meat: {
          name: "正则使用"
        },
        component: () =>
          import(
            /* webpackChunkName: "regular" */ "../views/正则使用/index.vue"
          )
      },
      {
        //element弹框
        path: "/popUp",
        name: "popUp",
        meat: {
          name: "element弹框"
        },
        component: () =>
          import(
            /* webpackChunkName: "popUp" */ "../views/element弹框/index.vue"
          )
      },
      {
        //element上传
        path: "/elementUploading",
        name: "ElementUploading",
        meat: {
          name: "element上传"
        },
        component: () =>
          import(
            /* webpackChunkName: "elementUploading" */
            "../views/element上传/index.vue"
          )
      },

      {
        //单选多选
        path: "/oneMoreSelect",
        name: "oneMoreSelect",
        meat: {
          name: "单选多选"
        },
        component: () =>
          import(
            /* webpackChunkName: "oneMoreSelect" */
            "../views/单选多选/index.vue"
          )
      },
      {
        //分页
        path: "/fenye",
        name: "fenye",
        meat: {
          name: "分页"
        },
        component: () =>
          import(/* webpackChunkName: "fenye" */ "../views/分页/index.vue")
      },
      {
        //计算属性，3级联动
        path: "/liangdong",
        name: "liangdong",
        meat: {
          name: "计算属性3级联动"
        },
        component: () =>
          import(
            /* webpackChunkName: "liangdong" */
            "../views/计算属性3级联动/index.vue"
          )
      },
      {
        //async
        path: "/async",
        name: "async",
        meat: {
          name: "async"
        },
        component: () =>
          import(/* webpackChunkName: "async" */ "../views/async使用/index.vue")
      },
      {
        //弹框实时获取父组件里面的值
        path: "/box",
        name: "box",
        meat: {
          name: "弹框实时获取父组件里面的值"
        },
        component: () =>
          import(
            /* webpackChunkName: "box" */
            "../views/弹框实时获取父组件里面的值/index.vue"
          )
      },
      {
        //表格封装
        path: "/biaoGeFengZhuang",
        name: "biaoGeFengZhuang",
        meat: {
          name: "表格封装"
        },
        component: () =>
          import(
            /* webpackChunkName: "biaoGeFengZhuang" */
            "../views/表格封装/index.vue"
          )
      },
      {
        //插槽
        path: "/chaChao",
        name: "chaChao",
        meat: {
          name: "插槽"
        },
        component: () =>
          import(
            /* webpackChunkName: "chaChao" */ "../views/插槽使用/index.vue"
          )
      },
      {
        //keep-alive的使用
        path: "/keepAlive",
        name: "KeepAlive",
        meat: {
          name: "keep-alive"
        },
        component: () =>
          import(
            /* webpackChunkName: "chaChao" */
            "../views/keep-alive的使用/index.vue"
          )
      },
      {
        //拖拽
        path: "/mobile",
        name: "Mobile",
        meat: {
          name: "可移动box+焦点获取"
        },
        component: () =>
          import(
            /* webpackChunkName: "chaChao" */
            "../views/mobileBox/index.vue"
          )
      }
    ]
  };
}
