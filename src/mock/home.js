import Mock from "mockjs";

// 图表数据

export default {
  getStatisticalData: num => {
    let List = [];
    num = parseInt(num.url.substring(num.url.length - 1, num.url.length));
    for (let i = 0; i < num; i++) {
      List.push(
        Mock.mock({
          img: Mock.Random.image("400x400", Mock.Random.color())
        })
      );
    }
    return {
      code: 20000,
      data: List
    };
  }
};
