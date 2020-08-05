import dynamic from '../utils/dynamic';

// 管理页面
const IndexLayout = dynamic(import('../layout/IndexLayout.jsx'));
const NotFound = dynamic(import('../components/not-found/NotFound'));

const routes = [
  {
    path: '/',
    component: IndexLayout,
    routes: [
      {
        path: '/index',
        exact: true,
        component: dynamic(import('../pages/index/index.jsx'))
      },
      {
        path: '/list',
        exact: true,
        component: dynamic(import('../pages/list/index.jsx'))
      },
      {
        path: '/about',
        exact: true,
        component: dynamic(import('../pages/about/index.jsx'))
      },
      { path: '*', component: NotFound }
    ]
  },
];

export default routes;
