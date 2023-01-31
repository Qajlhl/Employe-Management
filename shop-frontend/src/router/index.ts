import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import { Message } from '@arco-design/web-vue';
import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import { isLogin } from '@/utils/auth';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,
    REDIRECT_MAIN,
    NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to,from,next) => {
  NProgress.start();

  //拦截
  // console.log(to);
  let { meta,name } = to;
  if(name == 'login '){
    next();
  }else{
    if(meta.requiresAuth){
      //登陆需要路由验证
      if(isLogin()){
        next();
      }else{
        Message.info({
          content:'请先登录',
          closable:true,
        });
        next({name:'login'});
      }
    }

    else{
      next();
    }
  }
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
