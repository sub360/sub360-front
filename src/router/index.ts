import { isNavigationFailure } from 'vue-router'
import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 每次路由切换前调用
router.beforeEach((to, from, next) => {
    NProgress.start()
    // 下一步
    next();
})

// 每次路由切换后调用
router.afterEach((to, from, failure) => {
    if (to.matched.length == 0) {
      console.log('no matched route, url=', to.fullPath);
    }

    if (isNavigationFailure(failure)) {
      console.log('failed navigation', failure)
    }

    NProgress.done();
})
console.log('router=', router.getRoutes());
export default router;