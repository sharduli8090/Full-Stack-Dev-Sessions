// event listener
// let myBtn = document.getElementById('myBtn');
// myBtn.addEventListener('click',displayMessage);

// function displayMessage(){
//     let myDiv = document.getElementById('myDiv');
//     myDiv.innerHTML = "Hello World";
// }

// Functions
// function declaration
// function funcName(){
//     console.log("Hello");
//     let num = 20;
//     let num2= 30;
//     let sum = num + num2;
//     console.log(sum);
// }

// // function call
// funcName()

// Function parameters and return values
// function addFunction(a,b){
//     return a+b;
// }

// const sum  = addFunction(5,6);
// console.log(sum);


// function expression
// const multiply = function(a,b){
//     let mul = a*b;
//     return mul;
// }

// console.log(multiply(10,20));

// Arrow function
// const functionName = (parameters)=>{
//     //code
// }

// const displayMessage = () => {
//     let myDiv = document.getElementById('myDiv');
//     myDiv.innerHTML = "Hello World";
// }


// Higher Order Functions
//  const arr = [2,3,5,6,11,4];
//  const squaredNums = arr.map((num)=>num*num);
// console.log(squaredNums);

// function func1(){
//     return "I am function 1";
// }

// // higher order function - if parameter is a function - if a function returns a function

// function func2(functionPassed){
//     console.log('I am function 2')
//     return functionPassed()
// }

// console.log(func2(func1));

// func2 = High order Function
// func1 = Callback Function

// Functional SCope
// function sayHello(){
//     let msg = "Hello";
//     console.log(msg);
// }
// sayHello();
// console.log(msg);

// Named Functions and Anonymous Functions
//named
// function abcd(){
//     //code
// }

// // anonymous
// const xyz = function(){
//     //code
// }

// document.addEventListener('click',function(){})

// Callback Function
// function fetchData(url, callback){
//     const data = {name:"John",age:20};
//     setTimeout(()=>{ // webapi - asynchronous provided by browser
//         callback(data.name);
//     },2000);
// }
// function callbackFunction (data){
//     console.log("I am callback function " + data);
// }

// fetchData("xyz url",callbackFunction);


// function functionName(parameters){
//     //code
// }

// fucntionName(arguments);


// Array
// Declaration
// let arr = [1,2,3,4,5];
// console.log(arr);

//push - add element at the end of the array
// arr.push("6");
// console.log(arr);

// pop - remove element from the end of the array
// let removed = arr.pop();
// console.log(removed);
// console.log(arr);

// unshift - add element at the beginning of the array
// arr.unshift(0);
// console.log(arr);

// shift - remove element from the beginning of the array
// let removed = arr.shift();
// console.log(removed);
// console.log(arr);

// concat - merge two arrays
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr3 = arr2.concat(arr1);
// console.log(arr3);

// join - convert array to string
// let arr = ["Hello","World","John"];
// let str = arr.join("$");
// console.log(str);
