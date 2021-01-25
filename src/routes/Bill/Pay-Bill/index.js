import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/bill-manager/pay-bill',
  title: '待付账单',
  component: dynamicWrapper(app, [import('./model')], () => import('./main'))
});

export default (app) => createRoute(app, routesConfig);
