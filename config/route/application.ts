export default {
  path: '/application',
  name: 'application',
  icon: 'AppstoreAddOutlined',
  routes: [
    {
      path: '/application',
      name: 'list',
      hideInMenu: true,
      component: './application',
    },
    {
      path: '/application/list',
      name: 'list',
      component: './application',
    },
    {
      path: '/application/config',
      name: 'config',
      component: './application/config',
    },
    {
      component: './404',
    },
  ],
};
