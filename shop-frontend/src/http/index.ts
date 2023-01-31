import { ref } from 'vue';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { Message } from '@arco-design/web-vue';
import router from '@/router';

interface MyResponseData {
  code: number;
  data?: any;
  msg: string;
  timestamp?: string;
  path?: string;
}

type ResponseData = MyResponseData | null;

// 需要对外暴露一个函数，用来发送http请求
// axios({url,method, data,params}).then.catch
export const useRequest = (
  options: AxiosRequestConfig = {
    url: '', // 请求地址
    method: 'get', // 请求方法。默认值为 ‘get’
    data: null, // 请求体，
    params: null, // 查询参数，类型 object对象
    timeout: 0, // 请求超时时间
    headers: { 'Content-Type': 'application/json' }, // 请求头
    baseURL: '', // 基础地址，当发起请求时，会和 url指定的地址进行拼接
  }
) => {
  let loading = ref<boolean>(true); // 默认值为 true
  let error = ref<AxiosError | Error | null>(null);
  let data = ref<ResponseData>(null);
  axios
    .post<MyResponseData, MyResponseData>(
      options.url as string,
      options.data,
      options
    )
    .then((res: MyResponseData) => {
      // 请求成功了, 但是后台还有一次校验 当返回的数据 中 code 值为 “200” 才是真正请求数据成功
      if (res.code === 200) {
        // 数据请求成功
        data.value = res;
        console.log(data.value);
      } else if (res.code === 401) {
        // 需要鉴权才可以获取资源，要给用户提示，过后跳转到登录页面
        Message.error({
          content: '您登录已超时或还未登录。请去登录。',
          closable: true,
          duration: 2000,
        });
        router.push('/login'); // 跳转到登录页面
      } else {
        throw new Error(res.msg);
      }
    })
    .catch((err: AxiosError | Error) => {
      error.value = err;
    })
    .finally(() => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    });

  return { loading, error, data };
};
