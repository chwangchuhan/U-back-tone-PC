import $$ from 'cmn-utils';

// 获取本月账单
export async function getMonthBillList(payload) {
  return $$.get('/bill/month/list', payload);
}

// 获取全部账单列表
export async function getBillList(payload) {
  return $$.get('/bill/all/list', payload);
}
