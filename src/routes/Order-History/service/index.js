import $$ from 'cmn-utils';

// 获取公司信息
export async function getOrderHistoryList() {
  return $$.get('/order/history/list');
}
