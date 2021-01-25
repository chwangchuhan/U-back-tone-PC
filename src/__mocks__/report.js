/**
  * 报告相关请求数据
  * 
  * 更多用法参考 http://mockjs.com/examples.html
 */
export default ({fetchMock, delay, mock, toSuccess, toError}) => {
  // 如果现有扩展不满足需求，可以直接使用fetchMock方法
  // fetchMock.mock(/httpbin.org\/post/, {/* response */}, {/* options */});

  return {
    // 获取报告数据
    '/api/report/list': (options) => {
      const body = JSON.parse(options.body || '{}')
      const list = [
        {
          name: '候选人A',
          status: 0, // 0 背调函待发送， 1 候选人待确认 2 背调人待确认 3背调已完成
          typeStr: '自由组合',
          updateTime: 1610905466935,
        },
        {
          name: '候选人B',
          status: 0, // 0 背调函待发送， 1 候选人待确认 2 背调人待确认 3背调已完成
          typeStr: '自由组合',
          updateTime: 1610905466935,
        },
        {
          name: '候选人CC',
          status: 0, // 0 背调函待发送， 1 候选人待确认 2 背调人待确认 3背调已完成
          typeStr: '自由组合',
          updateTime: 1610905466935,
        },
        {
          name: '候选人CA',
          status: 0, // 0 背调函待发送， 1 候选人待确认 2 背调人待确认 3背调已完成
          typeStr: '自由组合',
          updateTime: 1610905466935,
        }
      ].filter(item => item.name.includes(body.name))
      return toSuccess(mock({
        list,
      }), 500);
    },

  }
}