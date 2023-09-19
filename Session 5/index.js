// Conditional Statements
// if else
// if(<condition>){
//     // if true
// }else{
//     // if false
// }

// let num = 21;

// if(num%2 === 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// if , else if , else

// let num = -40;
// if(num>0){
//     console.log("Positive");
// }else if( num<0){
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }

// Switch Case
// switch(expression/variable){
//     case 1:
//         // code
//         break;
//     case 'hello':
//         // code
//         break;
//     default:
//         // code
// }

// let num = 2;

// switch(num){
//     case 1:
//         //code
//     case 200:
//         //code
// }

// let day = "Monday";

// switch(day){
//     case "Monday":
//         console.log("Monday");
//         break;
//     case "Tuesday":
//         console.log("Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//     case "Thursday":
//         console.log("Thursday");
//         break;
//     case "Friday":
//         console.log("Friday");
//         break;
//     case "Saturday":
//         console.log("Saturday");
//         break;
//     case "Sunday":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

// unary operators - 1  operand
// binary operators - 2 operands
// ternary operators - 3 operands
// Syntax
// condition ? if true this will execute : if false this will execute

// let num = 50;  
// console.log(num>100 ? "Number greater than 100": "Number less than 100");


// Loops
// For Loop -> Loops a block of code no. of times
// for(let i=0;i<10;i++){
//     console.log(i);
// }

//  For in Loop -> Loops through the keys of an object
// let Student = {
//     name: "John",
//     age: 22,
//     gender: "Male"
// }

// for(let i in Student){
//     console.log(i ,":",Student[i]);
// }

// For of Loop -> Loops through the values of an iterable object - array or string etc.
// let names = "John Doe";

// for(let i of names){
//     console.log(i);
// }

// let arr = ["Hello",1,true,"John"];
// for(let i of arr){
//     console.log(i);
// }

// While Loop -> Loops a block of code while a condition is true
// while(condition){
//     //code
// }


// let x = -10;
// while(x>=0){
//     console.log(x);
//     x--;
// }


// Do While Loop -> Loops a block of code while a condition is true , but executes the code atleast once
// do{
//     //code
// }while(condition);

// let x = -10;
// do {
//     console.log(x);
//     x--;
// }while(x>0);


// DOM Manipulation - id class tagname
// document.<how are we going to access>(<what are we going to access>).<what we want to do with it/ property> = value;

// id

// document.getElementById("div12").style.display = "none";
// document.getElementById("div2").style.color = "red";
// document.getElementById("div2").innerText = "Hello World";
// document.getElementById("div1").innerHTML = "<p>This is updated p tag</p>";

// class
// document.getElementsByClassName("div-container")[5].style.color = "blue";

// tagname
// document.getElementsByTagName("div")[0].style.color = "yellow";


// Function
// function showValue(){
//     let inputValue = document.getElementById("input1").value;
//     document.getElementById("result").innerHTML += "<br>"+inputValue;
//     document.getElementById("input1").value = "";
// }