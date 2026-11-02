// Module 4 contracts. Implement against Supabase later; the UI should depend only on these interfaces.
export interface WifiInfo{ssid:string;password:string}
export interface LoyaltyAccount{phone:string;points:number}
export interface Feedback{orderId:string;rating:1|2|3|4|5;comment?:string}
export interface ExtrasService{
 getWifi():Promise<WifiInfo>
 getLoyalty(phone:string):Promise<LoyaltyAccount>
 awardPoints(phone:string,orderId:string,amountInr:number):Promise<LoyaltyAccount>
 submitFeedback(f:Feedback):Promise<void>
 getReceipt(orderId:string):Promise<string>}
