import { defineStore } from "pinia";
import { getRoleIdByPage } from "@/api/roless";
import { roleState } from "@/store/modules/role/types";
interface IPage {
    pno: number; // 页码
    psize: number; // 每页显示条数
    totalElements: number; // 数据总数
    pCount: number; // 总页数
}
interface Irole {
    data: Array<roleState>;
    pageInfo: IPage;
    loading: boolean;
}
const roleStore = defineStore('role', {
    state: (): Irole => ({
        data: [],
        loading: false,
        pageInfo: {
            pno: 1, // 页码
            psize: 10, // 每页显示条数
            totalElements: 0, // 数据总数
            pCount: 0, // 总页数
        }
    }),
    getters: {
        list(state:Irole): roleState[] {
            return state.data;
        },
        page(state:Irole):IPage {
            return state.pageInfo;
        }
    },
    actions:{
        async setloading(partial:Partial<Irole>){
            this.$patch(partial);
        },
        async setData( partial: Partial<Irole> ){
           this.$patch(partial);
        },//设置用户列表
        async setPage( partial:  Partial<Irole>) {
            this.$patch(partial);
        },      
        async fetchData(){
            this.setloading({loading:true});
            let { pno,psize } = this.pageInfo;
            try{
                let res = await getRoleIdByPage({pno,psize});
              // console.log(res.data.list);
               this.setData({ data: res.data.list });
                this.setPage({ pageInfo: res.data.page });
            }catch(error){

            }finally{
                setTimeout(() => {
                    this.setloading({ loading: false });
                  }, 300);
            }
        },
    }
});
export default roleStore;

