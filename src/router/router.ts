import { createRouter, createWebHashHistory } from 'vue-router'

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
    name: 'wallet',
    path: '/wallet',
    component: Layout,
    redirect: "/wallet/index",
    children: [
      {
        path: 'index',
        meta: { title: '钱包' },
        component: () => import('/@/pages/wallet/index.vue'),
      }
    ]
  },
  {
    name: 'staking',
    path: '/staking',
    component: Layout,
    redirect: '/staking/index',
    children: [
      {
        path: 'index',
        meta: { title: '质押' },
        component: () => import('/@/pages/staking/index.vue'),
      }
    ]
  },
  {
    name: 'short-address',
    path: '/short-address',
    component: Layout,
    redirect: '/short-address/index',
    children: [
      {
        path: 'saIndex',
        meta: { title: '短地址' },
        component: () => import('/@/pages/short-address/index.vue'),
      }
    ]
  },
  {
    name: 'address',
    path: '/address',
    component: Layout,
    redirect: '/address/generate',
    children: [
      {
        path: 'generate',
        meta: { title: '地址生成' },
        component: () => import('/@/pages/address/generate/index.vue'),
      }
    ]
  },
  {
    name: 'tx',
    path: '/tx',
    component: Layout,
    meta: { title: '交易', icon: 'tx' },
    redirect: "/tx/boardcast",
    children: [
      {
        path: 'boardcast',
        meta: { title: '广播交易' },
        component: () => import('/@/pages/tx/boardcast/index.vue'),
      },
      {
        path: 'validate',
        meta: { title: '验证交易' },
        component: () => import('/@/pages/tx/validate/index.vue'),
      }
    ]
  },
  {
    name: 'wool',
    path: '/wool',
    component: Layout,
    meta: { title: '羊毛', icon: 'tx' },
    redirect: "/wool/acala",
    children: [
      {
        path: 'acala',
        meta: { title: 'Acala' },
        component: () => import('/@/pages/wool/acala/index.vue'),
      },
      {
        path: 'bandot',
        meta: { title: 'Bandot' },
        component: () => import('/@/pages/wool/bandot/index.vue'),
      }
    ]
  },
];

// 导出路由 在 main.ts 里使用
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;