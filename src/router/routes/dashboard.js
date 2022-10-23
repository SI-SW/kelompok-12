const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
        {
            path: '',
            name: 'Default',
            component: () => import('@/views/Dashboard/Default.vue'),
          },
          {
            path: 'tables',
            name: 'Tables',
            component: () => import('@/views/Dashboard/Tables.vue'),
          },
          {
            path: 'billing',
            name: 'Billing',
            component: () => import('@/views/Dashboard/Billing.vue'),
          },
          {
            path: 'profile',
            name: 'Profile',
            component: () => import('@/views/Dashboard/Profile.vue'),
          },          
    ],
};

export default dashboard