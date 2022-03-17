import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/common/TableSample.vue'
import Dashboard from '@/views/common/Dashboard.vue'
import Table from '@/views/common/TableSample.vue'
import ChartDemo from '@/views/common/ChartDemo.vue'
import Dialog from '@/views/common/DialogTest.vue'
import MemberDetail from '@/views/common/MemberDetail.vue'
import Calendar from '@/views/main/common/CallInput.vue'
import SignIn from '@/views/SignIn.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/chart',
    name: 'Chart',
    component: ChartDemo
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog
  },
  {
    path: '/input',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/member_detail',
    name: 'MemberDetail',
    component: MemberDetail
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  }
]

  



const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
