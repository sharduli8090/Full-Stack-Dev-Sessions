// Error Handling

// 1. Try Catch
// try{
//     let result = someFunction();
//     //code
// }catch(e){
//     console.log(e);
//     //code
// }

// 2. Throwing errors
// function divide(a,b){
//     if(b===0){
//         throw new Error("Cannot divide by zero");
//     }
//     return a/b;
// }

// console.log(divide(10,0)); // Error: Cannot divide by zero

// 3. Custom Errors
// Error // Base class for all errors
// class myErrorClass extends Error{
//     constructor(message){
//         super(message)
//         this.name = "myCustomError";
//     }
// }

// function divide(a,b){
//     if(b===0){
//         throw new myErrorClass("Cannot divide by zero");
//     }
//     return a/b;
// }
// divide(10,0); // myCustomError: Cannot divide by zero

// 4. Finally
// try {
//     let a= 10
//     let b=0;
//     if(b===0){
//         throw new Error("Cannot divide by zero");
//     }
//     let res = a/b;
//     console.log(res);
// } catch (error) {
//     console.log(error);
// }finally{
//     console.log("Finally block");
// }

// 5. Async Await
// async function myAsyncFuction() {
//   try {
//     let result = await someFunction();
//   } catch (e) {
//     //handle error
//   }
// }


//5 . Promise
// somePromise()
// .then((result)=>{
//     //code
// }).catch((e)=>{
//     //code
// }
// )

// ES6 
// 1- let and const

// 2- Arrow Functions
// ()=>{}

// 3- Template Literals
// let names = "John";
// let name2 = "Joe";
// console.log(`Hello ${name2} and ${names}`);

// 4- Default Parameters
// function add(a=10,b=10){
//     return a+b;
// }
// console.log(add(1,5));

// 5- Destructuring
// extract data from array or object

// const [x,y] = [1,2]; 
// console.log(x,y);

// const {names,age} = {names:"John",age:20};
// console.log(names,age);

// 6- classes
// class Person{
//     constructor(){

//     }
// }

// 7- Modules
// import {add} from "./main.js";

// console.log(add(1,2));

// 8- Promises

// 9- Async Await

// 10 - Rest and Spread Operator (...)

//Rest
// function printArguments(arg1,arg2,arg3,...restArg){
//     console.log(arg1,arg2,arg3);
//     console.log(restArg);
// }
// printArguments(1,2,3,4,5,6,7,8,9,10);


// //Spread
// const num1 = [1,2,3];
// const num2 = [4,5,6];

// const num3 = [...num1,...num2];
// console.log(num3);

// spread - spreads the combine element such as array or object to individual elements
// rest - combines the individual elements to array or object