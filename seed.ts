import type {State} from '../types'
const cheese={name:'Extra cheese',price:40},guac={name:'Guacamole',price:60},jal={name:'Jalapeños',price:20}
export const seed:State={
 categories:[{id:'starters',name:'Starters'},{id:'mains',name:'Mains'},{id:'drinks',name:'Drinks'}],
 tables:[1,2,3,4,5,6,7,8],orders:[],nextNumber:101,
 items:[
 {id:'pizza',name:'Mexican Pizza',desc:'Crisp tortilla layers, refried beans, peppers, jalapeños and melted cheese.',price:349,categoryId:'mains',image:'/images/mexican-pizza.jpg',available:true,spice:true,extras:[cheese,jal]},
 {id:'tacos',name:'Classic Tacos',desc:'Three corn tacos with spiced filling, pico de gallo and lime crema.',price:249,categoryId:'mains',image:'/images/classic-tacos.jpg',available:true,spice:true,extras:[guac,cheese]},
 {id:'nachos',name:'Loaded Nachos',desc:'House tortilla chips, queso, beans, salsa roja, sour cream and jalapeños.',price:229,categoryId:'starters',image:'/images/loaded-nachos.jpg',available:true,spice:true,extras:[guac,cheese]},
 {id:'bowl',name:'Burrito Bowl',desc:'Cilantro-lime rice, black beans, grilled vegetables, corn salsa and guacamole.',price:299,categoryId:'mains',image:'/images/burrito-bowl.jpg',available:true,spice:true,extras:[guac,cheese]},
 {id:'quesadilla',name:'Quesadillas',desc:'Griddled flour tortilla with three cheeses, peppers and a smoky salsa.',price:269,categoryId:'mains',image:'/images/quesadillas.jpg',available:true,spice:true,extras:[guac,jal]},
 {id:'coffee',name:'Cold Coffee',desc:'Slow-steeped coffee over ice with a hint of cinnamon.',price:149,categoryId:'drinks',image:'/images/cold-coffee.jpg',available:true,spice:false,extras:[]},
 {id:'mocktail',name:'Mocktails',desc:'Fresh lime and mint cooler, or spiced mango and tamarind.',price:169,categoryId:'drinks',image:'/images/mocktails.jpg',available:true,spice:false,extras:[]}]}
