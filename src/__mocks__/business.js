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
    // 获取企业认证结果
    '/api/business/verify/info': (options) => {
      return toSuccess(mock({
        'step': 3,  // 0 未认证  1 审核中  2 审核完成  3审核失败
      }), 200);
    },
    // 上传认证信息
    '/api/business/verify/upload': (options) => {
      return toSuccess(mock({
        'step': 0,  // 0 未认证  1 审核中  2 审核完成
      }), 200);
    }
  }
}