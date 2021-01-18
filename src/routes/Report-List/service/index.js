import $$ from 'cmn-utils';

// 获取公司信息
export async function getRpeortList(payload) {
  return $$.post('/report/list', payload);
}
