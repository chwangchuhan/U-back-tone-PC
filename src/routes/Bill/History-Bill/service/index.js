import $$ from 'cmn-utils';

// 获取本月账单
export async function getHistoryBillList(payload) {
  return $$.post('/bill/history/list', payload);
}