import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/report-manager/info/:id',
  title: '详细报告',
  component: dynamicWrapper(app, [import('./model')], () => import('./main'))
});

export default (app) => createRoute(app, routesConfig);
