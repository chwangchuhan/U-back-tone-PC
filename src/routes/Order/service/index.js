import $$ from 'cmn-utils';

// 获取公司信息
export async function getBusinessInfo() {
  return $$.get('/business/info');
}

// 获取商品列表
export async function getOrderGoodsList() {
  return $$.get('/order/goods/list');
}

// 获取商品套餐
export async function getOrderGoodsMeal() {
  return $$.get('/order/goods/meal');
}

// 提交订单
export async function submitOrder() {
  return $$.post('/order/submit');
}