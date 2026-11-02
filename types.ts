export type Status='pending'|'accepted'|'preparing'|'ready'|'served'|'rejected'
export interface Category{id:string;name:string}
export interface Item{id:string;name:string;desc:string;price:number;categoryId:string;image:string;available:boolean;spice:boolean;extras:{name:string;price:number}[]}
export interface OrderLine{name:string;qty:number;price:number;detail:string}
export interface Order{id:string;number:number;table:number;lines:OrderLine[];total:number;status:Status;createdAt:number;billRequested:boolean;source:'local-demo'}
export interface CartLine{key:string;name:string;unit:number;qty:number;detail:string}
export interface State{categories:Category[];items:Item[];tables:number[];orders:Order[];nextNumber:number}
