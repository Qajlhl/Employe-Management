import axios from "axios";
import { method } from "lodash";
import { Ilist,IcommonResponseData } from "./types";
import  { Irole }  from '@/views/system/users/store';
type ResponseData = IcommonResponseData & Ilist<
    {
        list:Array<Irole>
    }
>;

//返回所有角色
export const getAllRoleId = ()=> axios.get<ResponseData, ResponseData>('/role/list/all');
export function getRoleIdByPage(params:{pno:number,psize:number}){
    return axios({
        method:'get',
        url:`/role/list/page?pno=${params.pno}&psize=${params.psize}`,
    });
}
//新增角色
export const InsertRole = (role: { name: string }) => axios.put<IcommonResponseData, IcommonResponseData>('/role/insert',role);
export const DeleteRole = ( id:number|string ) => axios.delete<IcommonResponseData, IcommonResponseData>(`/role/delete/id/${id}`);
export const UpdateRole = ( role:{ name:string } )=> axios.put<IcommonResponseData, IcommonResponseData>('/role/update',role);
// export function DeleteRole(params:{id:number|string}){
//     return axios({
//         method:'delete',
//         url:`/role/delete/id/${params.id}`
//     });
// }
// export const getRoleIdByPage= ()=>axios.get<ResponseData, ResponseData>('/role/list/page');
// export function getAllRoleId() {
//     return axios({
//         method:'get',
//         url:'/role/list/all',
//     });
// }
