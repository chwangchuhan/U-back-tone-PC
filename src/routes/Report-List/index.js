import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/report-manager/list',
  title: '报告列表',
  component: dynamicWrapper(app, [import('./model')], () => import('./main'))
});

export default (app) => createRoute(app, routesConfig);
