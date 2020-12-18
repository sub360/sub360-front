import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import {default as Layout} from '/@/layout/index.vue'

// 路由配置
const routes = [
  {
    name: 'home',
    path: '/',
    component: Layout,
    redirect: '/wallet/index'
  },
  {
    name: 'address',
    path: '/address',
    component: Layout,
    children: [{
      name: 'index',
      path: '',
      meta: { title: '地址' },
      component: () => import('/@/views/address/index.vue'),
    }]
  },
  {
    name: 'shortAddress',
    path: '/short-address',
    component: Layout,
    children: [
      {
        name: 'index',
        path: '',
        meta: { title: '短地址' },
        component: () => import('/@/views/short-address/index.vue')
      }
    ]
  },
  {
    name: 'staking',
    path: '/staking',
    component: Layout,
    children: [{
      name: 'index',
      path: '',
      meta: { title: '质押' },
      component: () => import('/@/views/staking/index.vue'),
    }]
  },
  {
    name: 'tx',
    path: '/tx',
    component: Layout,
    meta: { title: '交易', icon: 'tx' },
    children: [{
      name: 'index',
      path: '',
      meta: { title: '交易' },
      component: () => import('/@/views/tx/index.vue'),
    }]
  },
  {
    name: 'wallet',
    path: '/wallet',
    component: Layout,
    children: [
      {
        name: 'index',
        path: '',
        meta: { title: '钱包' },
        component: () => import('/@/views/wallet/index.vue')
      }
    ]
  }
];

// 导出路由 在 main.ts 里使用
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;