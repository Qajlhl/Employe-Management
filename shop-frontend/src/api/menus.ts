import axios from "axios";
import { Ilist,IcommonResponseData } from "./types";

type ResponseData = IcommonResponseData & Ilist<
    {
        list:Array<{
            id:number,
            name:string,
            icon:string,
            children?:Array<{
                name:string,
                icon:string,
                url:string,
                id:number
            }>
        }>
    }
>;

export const getAllMenus = () => axios.get<ResponseData,ResponseData>('/menu/list/all');