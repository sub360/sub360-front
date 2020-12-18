import { isNavigationFailure } from 'vue-router'
import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 每次路由切换前调用
router.beforeEach((to, from, next) => {
    console.log("beforeEach, from=", from);
    console.log("beforeEach, to=", to);
    console.log("beforeEach, next=", next);

    NProgress.start()
    // 下一步
    next();
})

// 每次路由切换后调用
router.afterEach((to, from, failure) => {
    console.log("afterEach, to=", to);
    console.log("afterEach, from=", from);
    console.log("afterEach, failure=", failure);

    if (isNavigationFailure(failure)) {
      console.log('failed navigation', failure)
    }

    //document.title = to.meta["title"];
    
    NProgress.done();
})

export default router;