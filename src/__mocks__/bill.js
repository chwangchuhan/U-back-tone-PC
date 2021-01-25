/**
  * 账单相关请求数据
  * 
  * 更多用法参考 http://mockjs.com/examples.html
 */
export default ({fetchMock, delay, mock, toSuccess, toError}) => {
  // 如果现有扩展不满足需求，可以直接使用fetchMock方法
  // fetchMock.mock(/httpbin.org\/post/, {/* response */}, {/* options */});

  return {
    // 获取月历史订单
    'GET /api/bill/month/list': (options) => {
      return toSuccess(mock({
        list: [
          {
            name: '候选人A',
            price: 9.9,
            typeStr: '自由组合',
            time: 1610905466935,
          },
          {
            name: '候选人B',
            price: 12.3,
            typeStr: '初级背调',
            time: 1610905466935,
          },
          {
            name: '候选人C',
            price: 14.3,
            typeStr: '初级背调',
            time: 1610905466935,
          }
        ]
      }), 500);
    },
    'GET /api/bill/all/list': (options) => {
      return toSuccess(mock({
        list: [
          {
            name: '候选人A',
            price: 9.9,
            typeStr: '自由组合',
            time: 1610905466935,
          },
          {
            name: '候选人B',
            price: 12.3,
            typeStr: '初级背调',
            time: 1610905466935,
          },
          {
            name: '候选人C',
            price: 14.3,
            typeStr: '初级背调',
            time: 1610905466935,
          },
          {
            name: '候选人D',
            price: 14.3,
            typeStr: '初级背调',
            time: 1610905466935,
          }
        ]
      }), 500);
    },
    'POST /api/bill/history/list': (options) => {
      const body = JSON.parse(options.body || '{}')
      const dates = body.dates
      console.log(dates)
      return toSuccess(mock({
        list: [
          {
            name: '候AAA',
            price: 9.9,
            typeStr: '自由组合',
            time: 1610905466935,
          },
          {
            name: 'XXXX',
            price: 12.3,
            typeStr: '初级背调',
            time: 1610905466935,
          },
          {
            name: 'VVV',
            price: 14.3,
            typeStr: '初级背调',
            time: 1610905466935,
          },
          {
            name: 'DDD',
            price: 14.3,
            typeStr: '初级背调',
            time: 1610905466935,
          }
        ]
      }), 500);
    },

  }
}