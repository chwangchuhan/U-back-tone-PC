/**
 * 模拟请求数据
 * @param {FetchMock} fetchMock 当现有条件不满足时，可以使用fetchMock来进行扩展
 * @param {function} delay 增加延迟时间 ms 例: delay(mockData) 或 delay(mockData, 200)
 * @param {function} mock 使用mock生成数据，例:

   mock({
     'string|1-10': '★' // 生成最少1颗，最多10颗星字符
   })

   // {'string': '★★★★★★'} 

  更多用法参考 http://mockjs.com/examples.html
 */
export default ({fetchMock, delay, mock, toSuccess, toError}) => {
  // 如果现有扩展不满足需求，可以直接使用fetchMock方法
  // fetchMock.mock(/httpbin.org\/post/, {/* response */}, {/* options */});

  return {
    // 获取订单商品列表
    'GET /api/order/goods/list': (options) => {
      return toSuccess(mock({
        groups: [
          {
            id: 1,
            title: '身份户籍信息',
            goods: [
              {
                id: 1,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                 type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
              {
                id: 11,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 12,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 13,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 14,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
            ]
          },
          {
            id: 1,
            title: '身份户籍信息',
            goods: [
              {
                id: 21,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                 type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
              {
                id: 22,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 23,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 24,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 25,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
            ]
          },
          {
            id: 1,
            title: '身份户籍信息',
            goods: [
              {
                id: 31,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                 type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
              {
                id: 32,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 33,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 34,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 35,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
              {
                id: 36,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                 type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
              {
                id: 37,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 38,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 39,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 40,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
              {
                id: 41,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
              {
                id: 42,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 442,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 4442,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },{
                id: 552,
                title: '身份信息核实',
                price: 10,
                originalprice: 20,
                type: 0,  // 0 带身份图标，1 只显示文字
                explain: [
                  '单价：10元',
                  '数量：1',
                  '时长：1个工作日',
                  '说明：核实候选人姓名、身份证的一致性',
                ]
              },
            ]
          }
        ]
      }), 200);
    },
    // 获取订单商品套餐
    'GET /api/order/goods/meal': (options) => {
      return toSuccess(mock({
        meals: [
          {
            id: 1,
            label: '基础背调',
            originPrice: 199,
            price: 50,
            unit: '人',
          },
          {
            id: 2,
            label: '初级背调',
            originPrice: 299,
            price: 100,
            unit: '人',
          },
          {
            id: 3,
            label: '中级背调',
            originPrice: 599,
            price: 200,
            unit: '人',
          },
          {
            id: 4,
            label: '高级背调',
            originPrice: 1099,
            price: 300,
            unit: '人',
          },
        ]
      }), 200);
    },
  }
}