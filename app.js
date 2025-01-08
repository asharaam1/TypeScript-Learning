//? (27-12-2024)
// TS Compiler P
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards
// type casting
// classes
//! TS Compiler P
// how to download and run the code we learn node.txt 
//!-----Type Annotations-----//
// eska mtlb ka varible ki type yahin bta dena
// let username: string = "abdullah"
// username = " 20"
// let age: number = 20;
// age = 21
// let isLoggedIn: boolean = true;
// isLoggedIn = false
// let string:any = true //todo Bad Practice
//! (30-12-2024)
// let string:any = true
// let city:string = "karachi";
// city = 20
//!----- Type Inference-----//
//todo Defuaulty jo type of value assign ho gai tu agge bhi wohi rakhni pare gi 
// let username = "abdullah"
// username = 20
// console.log(username);
// let isLoggedIn = true;
// isLoggedIn = "abc"
// console.log(isLoggedIn);
//!----- Type Aliases & Union Types -----//
// Union type mtlb ke ek variable ko different type da sakhte han 
// e.g: (string | number)
// type Abd = string | number  //todo this is called TYPE ALIASES
// let username: Abd = "abdullah"
// username = 20
// console.log(username);
// todo NOTE: "type:" ke baad ko bhi naam rakhte ho uska 1st word capital rakho that is good practice
// // type fruits = (string | number) []
// type Fruit = (number | string)[]
// let fruit: Fruit = ["apple", "banana", "10", 20]
// type User = {
//     username: string;
//     fullname: string;
//     age: number;
//     isLoggedIn: boolean;
//     hobbies: string[];
//     abc?: string  //todo "?"  => eske bare ma detail se paren ga
// }
// const user: User = {
//     username: "mabdullah",
//     fullname: "Muhammad Abdullah",
//     age: 21,
//     isLoggedIn: true,
//     hobbies: ['eating', 'sleeping', 'coding']
// }
// user.abc = "Abdullah"
// console.log(user);
// function greetUser(username: string, age: number): string {
//     return `your name is ${username} and your age is ${age}`
// }
// console.log(greetUser("Abdullah", 20)); //Ya chale ga
// function hello(username: any): string {
//     console.log("hello world");
//     return `username is ${username}`
// }
// hello("abdullah") //Ase nhi chale ga => agar function ke andar console nhi hoga tu nhi chale ga 
// type User = {
//     username: string;
//     greetUser: () => string
//     hobbies?: (string | number)[]
// }
// const user: User = {
//     username: "abdullah",
//     greetUser: () => {
//         return `fjlkdf`
//     }
// }
// user.hobbies = ["abdullah" , true] 
//? (01-01-2025)
//Revision
// let user: string | number = 12;
// console.log(user);
// type Fruits = (string | number)[]
// let fruit: Fruits = ["apple", 20]
// console.log(fruit);
// const fruits:Fruits = ["apple" , "banana"]
// console.log(fruits);
// type User = {
//     username: string;
//     age: number;
//     hobbies?: string[];
//     isLoggedIn?: boolean;
//     greetUser?: () => void;
// }
// const user: User = {
//     username: "mabdullah",
//     age: 20,
// }
// console.log(user);
// // user.abc = "abdullah" //error buz abc not defined in type user
// user.greetUser = () => {
//     console.log("hello world");
//     // return `asha `
// }
// user.greetUser()
// let asha = user.greetUser()
// console.log(asha); //if no return it shows undefined
// type User = {
//     username: string;
//     age: number;
//     hobbies?: string[];
//     isLoggedIn?: boolean;
//     greetUser?: () => void;
// }
// type Manager = User[]
// let firstMan: Manager = [
//     {
//         username: "abdullah",
//         age: 20
//     }
// ]
// console.log(firstMan);
// firstMan.push({username:'asha', age: 20})
// console.log(firstMan);
//!-----Interfaces-----//
// interface User {
//     username: string;
//     age: number;
//     hobbies: string[];
//     isLoggedIn: boolean;
//     greetUser?: (username: string) => string;
// }
// const user: User = {
//     username: "mabdullah",
//     age: 20,
//     hobbies: ["eating"],
//     isLoggedIn: true
// }
// console.log(user);
// user.greetUser = (username: string): string => {
//     return `hello ${username}`
// }
// console.log(user.greetUser('abdullah'));
// const user = {
//     username: "mabdullah",
//     age: 20,
//     hobbies: ["eating"],
//     isLoggedIn: true
// }
// console.log(user);
//!-----Type Aliases vs Interface-----//
// type User = {
//     name: string;
//     age: number
// }
// type User = { // wrong syntax
//     hobbies: []
// }
//todo  vs
// interface User {
//     name: string;
//     age: number
// }
// interface User { //right syntax
//     hobbies: string[]
// }
// const user: User = {
//     name: "abdullah",
//     age: 21,
//     hobbies: ['eating']
// }
// console.log(user);
// interface User {
//     username: string;
//     experience: number;
// }
// interface Manager extends User {
//     salery: number
// }
// const manager: Manager = {
//     username: "Muhammad Abdullah",
//     experience: 5,
//     salery: 500000
// }
// console.log(manager);
//todo Bad programmer use these mistake using for loops can time consuming 
//todo don't use consoles in your final code 
// for (let i = 0; i < 10000; i++) {
//     console.log(i) //time taken task
// }
// console.log("console after loop");
//syntatic sugar oop dekhne ma tu claas han but behind the scene ya protype hi kaam kare gi dot dot se access kae sakhte han
//? (03-01-2025)
//Class Test Practice 
//1st
// let num: number = 30
// console.log(num);
// let value: boolean = 5 > 20
// console.log(value);
// 2nd inference
// let myName: string = "Asha Ram"
// // myName = 20 //TS Mistake
// myName = "Ali"
// 3rd aliases
// type Password = (number | string)  //this is also union type e.g (number | string)
// let myPass: Password = 12 + "asha"
// 4th  Union Types
// let objectA: (string | number | boolean) = 'asha'
// console.log(objectA);
// objectA = 58
// console.log(objectA);
// objectA = 5 > 80
// console.log(objectA);
// 5th Interfaces 
//mostly used for objects
// interface MyObj {
//     username: string;
//     age: number;
//     email: string;
//     password?: boolean;
//     hobbies?: string[];
// }
// let obj1: MyObj = {
//     username: 'ali',
//     age: 20,
//     email: 'xyz@gmail.com',
// }
// console.log(obj1);
// 6th  Type Aliases vs Interface
// type ObjM = {
//     product?: string;
//     description?: string;
//     price?: number;
//     review?: string[];
// }
// // type ObjM = {  //type Alias here fail now we use interface
// //     pic: string;  
// // }
// interface ObjK {
//     product2: string;
//     description2?: string;
//     price2: number;
//     review2?: string[];
// }
// interface ObjK {
//     message?: string;
// }
// interface ObjO extends ObjK {
//     discount: (string | number);
// }
// let consoling: ObjK = {
//     product2: "watch",
//     price2: 200
// }
// let extendedConsoling: ObjO = {
//     product2: "watch",
//     price2: 200,
//     discount: 20 + "20%"
// }
// console.log(consoling);
// console.log(extendedConsoling);
// // function
// // function callName(first: string, second: string): string {
// //     return `my name is ${first} ${second}`
// // }
// console.log(callName("asha", "ram"));
//? (06-01-2025)
//!-----Generics-----//
// function identity<T>(arg: T): T {
//   return arg;
// }
// identity("adasdas")
// function greetUser<T>(username: T): T {
//     return username
// }
// greetUser(true)
//? (08-01-2025)
// 274 line code in sir github documentary
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// console.log(identityTwo(213));
// function identityThree<Type>(val: Type): Type {
//     return val
// }
// // identityThree(true)
// interface Car {
//     name: string;
//     brand: string;
// }
// identityThree<Car>({
//     name: "wagnor",
//     brand: "suzuki"
// })
//-----Enums-----//
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
// }
// console.log(CardinalDirections.East)
// enum User {
//     admin = "admin",
//     user = "user",
//     student = "student",
//     manager = "manager"
// }
// console.log(User.admin);
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// }
// console.log(StatusCodes.NotFound)
//-----Tuples-----//
// let ourTuple: [number, boolean, string];
// ourTuple = [20, true, "Fdfsdf"]
// ourTuple.push("hello")
// let ourTuple: readonly [number, boolean, string];
// ourTuple = [20, true, "Fdfsdf"]
// ourTuple.push("hello")
// let ourTuple: [number, boolean, string];
// ourTuple = [false, 'Coding God was mistaken', 5];
// const ourReadonlyTuple: [number, boolean, string] = [5, true, 'The Real Coding God'];
//---------Type Guards-----------//
// function hello(str: string | number) {
//     if (typeof str === "string") {
//         console.log(str.toLowerCase());
//     }
// }
// hello("BFSDJFBHDFB");
// hello(324324);
//? by me practice
// function greetUser(val:string):string{
//     return val;
// }
// console.log(greetUser('Asha Ram'));
// function greetGeneric<Type>(val: Type): Type {
//     return val;
// }
// console.log(greetGeneric(5));
// interface Store {
//     name: string;
//     shopNo: number;
// }
// greetGeneric<Store>({
//     name: "Pizza Hut",
//     shopNo: 5214,
// })
//? ChatGPT
// // Define the generic function
// function greetGeneric<T>(input: T): string {
//     return `Hello, ${JSON.stringify(input)}`;
// }
// // Define the Store interface
// interface Store {
//     name: string;
//     shopNo: number;
// }
// // Call the generic function with an object that matches the Store interface
// console.log(greetGeneric<Store>({
//     name: "Pizza Hut",
//     shopNo: 5214,
// }));
// // Call the generic function with a number
// console.log(greetGeneric<number>(5));
//? end
//! enum  => jo chiz yaaad nhi rehte usko store kar dete haan or wo hum address se access karte han
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// }
// console.log(StatusCodes.NotFound);
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West 
// }
// console.log(CardinalDirections); //logs Object
// console.log(CardinalDirections.South); //logs 2
// let currentDirection = CardinalDirections.North;
// console.log(currentDirection); // logs 0
// //  throws error as 'North' is not a valid enum
// // currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
//!-----Tuples-----//
// let arr: [string, number, boolean] = ['asha', 18, true]
// console.log(arr);
// console.log(arr.push('abdullah'));
// console.log(arr);
// //readonly => kuch bhi push karne nhi dega mtlb lock ho gya
// let myDetails: readonly [string, number, boolean] = ['asha', 18, true]
// console.log(myDetails);
// let pushing = myDetails.push('abdullah') //yahin error show kar rha
// console.log(myDetails); //log tu hoga but development error dega
//!-----Type Guard-----//
//simple esko bolo ke hum condition laga den ga
// function heyAsha(val:(string|number)){
//     // val.toLowerCase
//   if(typeof(val) === 'string'){
//         let newVal = val.toLowerCase()
//         return newVal;
//     }
// }
// console.log(heyAsha('asgkjKSNAJX '));
