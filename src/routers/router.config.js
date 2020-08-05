import { lazy } from 'react'
// 管理页面
const NotFound = lazy(() => import('../components/not-found/NotFound'));

const routes = [
  {
    path: '/index',
    exact: true,
    component: lazy(() => import('../pages/index/index.jsx'))
  },
  {
    path: '/list',
    exact: true,
    component: lazy(() => import('../pages/list/index.jsx'))
  },
  {
    path: '/about',
    exact: true,
    component: lazy(() => import('../pages/about/index.jsx'))
  },
  { path: '*', component: NotFound }
];

export default routes;
