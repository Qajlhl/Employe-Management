import axios from "axios";
import { Ilist, IcommonResponseData } from "./types";
import { UserState } from "@/store/modules/user/types";

type ResponseData = IcommonResponseData & Ilist<{
    list: Array<UserState>;
    page: {
        pno: number,//页号
        psize: number,//每页显示的数据数量
        totalElements: number,//总的数据数量
        pCount: number,//总页数
    }
}>;
export interface IUser {
    id?: number | string;
    username: string;
    password: string;
    nickname: string;
    face: string;
    roleId: string | number;
    deptId: string | number;
  }
//发送get请求
export function getUsers(params: { pno: number, psize: number, username?: string }) {
    return axios({
        method: 'get',
        url: `/user/list/page?pno=${params.pno}&psize=${params.psize}&username=${params.username}`,
    })
};

//删除用户的请求函数
export function deleteUserById(id: number|string) {
    return axios.delete<IcommonResponseData, IcommonResponseData>(`/user/id/${id}`)
}

//新增用户
export const AddUsers = (user: { 
    id?: number | string, 
    username: string, 
    password: string, 
    deptId: string|number, 
    roleId: string|number,
    nickname: string, 
    face: string }) => axios.put<IcommonResponseData, IcommonResponseData>('/user/insert', user);
    
export const updateUser = (user:IUser)=> axios.put<IcommonResponseData, IcommonResponseData>('/user/update',user);