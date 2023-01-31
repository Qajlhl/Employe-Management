import { defineStore } from "pinia";
import { UserState } from "@/store/modules/user/types";
import { getUsers,deleteUserById } from '@/api/users';
import { getAllRoleId } from "@/api/roless";
interface IPage {
    pno: number; // 页码
    psize: number; // 每页显示条数
    totalElements: number; // 数据总数
    pCount: number; // 总页数
}
export interface Irole{
    name:string;
    id:string|number;
    insertTime:string;
}
  
  interface Iusers {
    data: Array<UserState>;
    role:Irole[];
    pageInfo: IPage;
    loading:boolean;
}
const userStore = defineStore('users', {
    state: ():Iusers => ({
        data: [],
        role:[] as Irole[],
        loading:false,
        pageInfo: {
            pno: 1,//页号
            psize: 10,//每页显示的数据数量
            totalElements: 0,//总的数据数量
            pCount: 0,//总页数
        },
    }),
    getters:{
        list(state:Iusers): UserState[] {
            return state.data;
        },
        page(state:Iusers):IPage {
            return state.pageInfo;
        }
    },
    actions:{
        async setloading(partial:Partial<Iusers>){
            this.$patch(partial);
        },
        async setData( partial: Partial<Iusers> ){
           this.$patch(partial);
        },//设置用户列表
        async setPage( partial:  Partial<Iusers>) {
            this.$patch(partial);
        },      
        async fetchData(username?:string){
            this.setloading({loading:true});
            let { pno,psize } = this.pageInfo;
            try{
                let res = await getUsers({pno,psize,username:username ?? ''});
                this.setData({ data: res.data.list });
                this.setPage({ pageInfo: res.data.page });
            }catch(error){

            }finally{
                setTimeout(() => {
                    this.setloading({ loading: false });
                  }, 300);
            }
        },
        async fetchRoles(){
            this.setloading({loading:true});
            try{
                let { data,code } = await getAllRoleId();
                if(code == 200){
                    this.role = data.list;
                }
            }catch(error){

            }finally{
                setTimeout(() => {
                    this.setloading({ loading: false });
                  }, 300);
            }
        },
    }
});

export default userStore;