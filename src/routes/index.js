import { createRoutes } from '@/utils/core';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Page403 from './template/Pages/403';
import NotFound from './template/Pages/404';
import Page500 from './template/Pages/500';
import ScreenLock from './template/Widgets/ScreenLock';
import Coming from './template/Widgets/Coming';
import Gallery from './template/Widgets/Gallery';
import Result from './template/Widgets/Result';
import LevelRoute from './template/Widgets/LevelRoute';
import Dashboard from './template/Dashboard';
import Blank from './template/Blank';
import Toolbar from './template/Widgets/Toolbar';
import BaseComponent from './template/Widgets/BaseComponent';
import Column from './template/Widgets/Column';
import TransferTree from './template/Widgets/TransferTree';
import SearchBar from './template/Widgets/SearchBar';
import DataTable from './template/Widgets/DataTable';
import Form from './template/Widgets/Form';
import EC from './template/Widgets/Charts/EC';
import G2 from './template/Widgets/Charts/G2';
import Print from './template/Widgets/Print';
import Banner from './template/Widgets/Banner';
import Icon from './template/UI/Icon';
import Mask from './template/UI/Mask';
import Editor from './template/UI/Editor';
import CSSAnimate from './template/UI/CSSAnimate';
import Alerts from './template/UI/Alerts';
import Button from './template/UI/Button';
import Modal from './template/UI/Modal';
import CRUD from './template/Business/CRUD';
import CRUDDetail from './template/Business/CRUD/routers/Detail';
import Image from './template/UI/Image';

import Login from './Login';
import Register from './Register';
import Verify from './Verify' // 验证
import Order from './Order' // 下单页面
import OrderHistory from './Order-History' // 订单历史
import ReportList from './Report-List' // 报告列表
import ReportInfo from './Report-Info' // 详细报告


/**
 * 主路由配置
 * 
 * path 路由地址
 * component 组件
 * indexRoute 默认显示路由
 * childRoutes 所有子路由
 * NotFound 路由要放到最下面，当所有路由当没匹配到时会进入这个页面
 */
const routesConfig = app => [
  {
    path: '/sign',
    title: '登录',
    indexRoute: '/sign/login',
    component: UserLayout,
    childRoutes: [
      Login(app),
      Register(app),
      Verify(app),
      NotFound()
    ]
  },
  {
    path: '/',
    title: '系统中心',
    component: BasicLayout,
    indexRoute: '/task-manager/order',
    childRoutes: [
      Order(app),
      OrderHistory(app),
      ReportList(app),
      ReportInfo(app),

      Dashboard(app),
      Blank(app),
      Toolbar(app),
      Column(),
      SearchBar(),
      EC(app),
      G2(app),
      Icon(),
      Mask(),
      Editor(),
      CSSAnimate(),
      Alerts(),
      Button(),
      Modal(),
      DataTable(app),
      Form(app),
      TransferTree(app),
      BaseComponent(),
      CRUD(app),
      CRUDDetail(app),
      Coming(),
      ScreenLock(),
      Gallery(),
      Result(),
      Page403(),
      Page500(),
      Print(),
      Banner(app),
      LevelRoute(app),
      Image(),
      NotFound()
    ]
  }
];

export default app => createRoutes(app, routesConfig);
