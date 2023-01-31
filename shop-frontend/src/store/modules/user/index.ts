import { defineStore } from 'pinia';
import { login as userLogin, LoginData,getRole } from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';
import { watch } from 'vue';
import router from '@/router';
// import { useRouter } from 'vue-router'; //ERROR 在路由组件使用

const useUserStore = defineStore('user', {
  //persist: true,
  // state: () => ({}),
  state: (): UserState => {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : {};
  },
  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },
  actions: {
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    async login(loginForm: LoginData) {
      const { data, error, loading } = await userLogin(loginForm);
      // 判断用户登录是否成功
      watch(data, async () => {
        // 监听data
        // 1 获取后台给的token值，将其存储到localStorage中
        setToken(data.value?.data.token);


        // 2 后台返回的个人信息数据存储到 pinia 中 user模块里
        this.setInfo(data.value?.data.userInfo);

        //2.1 获取角色ID
        let roleId = data.value?.data.userInfo.roleId;
        let userInfo = data.value?.data.userInfo;

        //发送请求
        if(roleId){
          // let res = await getRole(roleId);
          // console.log(res);
          let { data } = await getRole(roleId);
          if(data.code == 200){
            //请求成功
            userInfo.role = data.data.name;
            // console.log(userInfo.role);
          }
        }

        // 3 页面跳转主页
        console.log(data);
        router.push({ name: 'Workplace' });
      });

      return { error, loading };
    },
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },
    // Logout
    async logout() {
      try {
      } finally {
        // this.logoutCallBack();
      }
    },
  },
});

export default useUserStore;
