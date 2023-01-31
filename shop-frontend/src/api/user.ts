import { useRequest } from '@/http';
import axios from 'axios';
export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
} // date:2022/10/10

export function login(data: LoginData) {
  return useRequest({
    url: '/user/login',
    method: 'post',
    data,
  });
}

export function getRole(roleId:string){
  return axios.get('/role/find/id/' + roleId);
};