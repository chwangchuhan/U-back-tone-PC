import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/bill-manager/history-bill',
  title: '历史账单',
  component: dynamicWrapper(app, [import('./model')], () => import('./main'))
});

export default (app) => createRoute(app, routesConfig);
