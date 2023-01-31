import axios from "axios";
import { Ilist,IcommonResponseData } from "./types";

type ResponseData = IcommonResponseData & Ilist<
    {
        list:Array<{
            id:number,
            name:string,
        }>
    }
>;
export const getAllDepts = ()=>axios.get<ResponseData, ResponseData>('dept/list/all');