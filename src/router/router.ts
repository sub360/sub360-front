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
  // 钱包
  {
    name: 'wallet',
    path: '/wallet',
    component: Layout,
    children: [
      {
        name: "index",
        path: 'index',
        meta: { title: '钱包' },
        component: () => import('/@/views/wallet/index.vue')
      }
    ]
  },
  // // 质押
  // {
  //   name: 'staking',
  //   path: '/staking',
  //   component: Layout,
  //   meta: { title: '质押', icon: 'staking' },
  //   children: [{
  //     name: 'staking',
  //     path: '/staking',
  //     component: () => import('@/views/staking'),
  //     meta: { title: '地址生成' },
  //   }]
  // },
  // // 工具
  // {
  //   name: 'tools',
  //   path: '/tools',
  //   component: Layout,
  //   meta: { title: '工具', icon: 'tool' },
  //   children: [{
  //     name: 'address',
  //     path: 'address',
  //     component: () => import('@/views/tools/address'),
  //     meta: { title: '地址生成' },
  //   },
  //   {
  //     name: 'tx',
  //     path: 'tx',
  //     component: () => import('@/views/tools/tx'),
  //     meta: { title: '交易' },
  //   }]
  // },
];

// 导出路由 在 main.ts 里使用
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;