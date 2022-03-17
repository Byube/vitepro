export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/common/TableSample.vue')
    },
    {
        path: '/input',
        name: 'Calendar',
        component: () => import('@/views/main/common/CallInput.vue')
      },
      {
        path: '/member_detail',
        name: 'MemberDetail',
        component: () => import('@/views/common/MemberDetail.vue')
      },
      {
        path: '/signIn',
        name: 'SignIn',
        component: () => import('@/views/SignIn.vue')
      }

];
