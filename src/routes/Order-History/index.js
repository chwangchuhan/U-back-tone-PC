import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/task-manager/order-history',
  title: '订单',
  component: dynamicWrapper(app, [import('./model')], () => import('./main'))
});

export default (app) => createRoute(app, routesConfig);
