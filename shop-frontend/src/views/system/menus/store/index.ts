import { defineStore } from "pinia";
import { menuStore } from "@/store/modules/menu/types";
import { getAllMenus } from "@/api/menus";
interface Imenu {
    data: Array<menuStore>;
    loading:boolean;
}
const menusStore = defineStore('menus', {
    state: ():Imenu => ({
        data: [],
        loading:false
    }),
    getters:{
        list(state:Imenu): menuStore[] {
            return state.data;
        }
    },
    actions:{
        async setloading(partial:Partial<Imenu>){
            this.$patch(partial);
        },
        async setData( partial: Partial<Imenu> ){
           this.$patch(partial);
        },//设置用户列表   
        async fetchData(){
            this.setloading({loading:true});
            try{
                let res = await getAllMenus();
                if(res.code == 200){
                    console.log(res);
                    this.setData({ data: res.data.list });
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

export default menusStore;