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
    redirect: '/address/generate',
    children: [{
      name: 'generate',
      path: 'generate',
      meta: { title: '地址生成' },
      component: () => import('/@/pages/address/generate/index.vue'),
    }]
  },
  {
    name: 'shortAddress',
    path: '/short-address',
    component: Layout,
    redirect: '/short-address/index',
    children: [
      {
        name: 'index',
        path: 'index',
        meta: { title: '短地址' },
        component: () => import('/@/pages/short-address/index.vue'),
      }
    ]
  },
  {
    name: 'staking',
    path: '/staking',
    component: Layout,
    redirect: "/staking/index",
    children: [
      {
        name: 'index',
        path: 'index',
        meta: { title: '质押' },
        component: () => import('/@/pages/staking/index.vue'),
      }
    ]
  },
  {
    name: 'tx',
    path: '/tx',
    component: Layout,
    meta: { title: '交易', icon: 'tx' },
    redirect: "/tx/boardcast",
    children: [{
      name: 'boardcast',
      path: 'boardcast',
      meta: { title: '广播交易' },
      component: () => import('/@/pages/tx/boardcast/index.vue'),
    },{
      name: 'validate',
      path: 'validate',
      meta: { title: '验证交易' },
      component: () => import('/@/pages/tx/validate/index.vue'),
    }]
  },
  {
    name: 'wallet',
    path: '/wallet',
    component: Layout,
    redirect: "/wallet/boardcast",
    children: [
      {
        name: 'index',
        path: 'index',
        meta: { title: '钱包' },
        component: () => import('/@/pages/wallet/index.vue'),
      }
    ]
  }
];

// 导出路由 在 main.ts 里使用
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;