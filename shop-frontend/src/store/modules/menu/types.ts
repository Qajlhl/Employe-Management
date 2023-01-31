export interface menuStore {
    id: number;
    name:string;
    icon:string;
    children?:Array<{
        name:string;
        icon:string;
        url:string;
        id:number;
    }>
}