// Primitive Data Types and Non Primitive Data Types

// 7 PRIMITIVE DATA TYPES
// Number
// let num = 100;
// console.log(typeof num);
// // String
// let firstName = "John";
// console.log(typeof firstName);
// // Boolean - true false
// let isEligible = true;
// console.log(typeof isEligible);
// // null
// let myVar = null;
// console.log(typeof myVar);
// // undefined
// let myVar2;
// console.log(typeof myVar2);
// // Symbol
// let mySymbolVar = Symbol('red');
// console.log(mySymbolVar);
// console.log(typeof mySymbolVar);
// // BigInt
// let myBigIntVar = 10000;
// console.log(myBigIntVar);
// console.log(typeof myBigIntVar);

// 1 NON PRIMITIVE DATA TYPE
// Object - key:value pairs
// let myObj = {
//     name: "John",
//     age: 30,
//     gender: "Male",
//     isEligible: true
// };

// console.log(myObj);
// console.log(myObj.age);
// console.log(myObj["age"]);

// // Updating object properties
// myObj.isEligible = false;
// console.log(myObj);

// // Adding new properties to an object
// // myObj.city = "New York";
// myObj["city"] = "London";
// console.log(myObj);

// // Deleting a property from an object
// delete myObj["isEligible"];
// console.log("After deleting isEligible property");
// console.log(myObj);

// Student Data

// let Student1 = {
//     name: "John",
//     gender:"Male",
//     marks:50
// }

// let Student2 = {
//     name: "Mary",
//     gender:"Female",
//     marks:70
// }

// // Accessing Object
// console.log("Name of Student 1 : ", Student1.name);
// console.log("Name of Student 2 : ", Student2.name);

// Arrays
// let myArray = [10, "John", true];
// console.log(typeof myArray);
// console.log(myArray);

// // Array of Objects
// let myArrayOfObjects = [
//   {
//     name: "John",
//     gender: "Male",
//     marks: 50,
//   },
//   {
//     name: "Mary",
//     gender: "Female",
//     marks: 70,
//   },
// ];

// console.log(myArrayOfObjects);



// If we create a variable of type string, and try to add a type number to it.
// let myVar = "Hello";
// let myVar2 = 10;
// let myVar3 = 20;
// // console.log(myVar + myVar2); //Hello10 Concatenation
// // console.log(myVar2 + myVar); 
// console.log(10 + 20 + "Hello"  );
// console.log("Hello"+10+20 );
// console.log(10 + 20 + "Hello" + 10 + 20);

// What if we create a constant variable (const) and change it to hold number.
const myConstObj = {
    myKey: "Hello"
}

// myConstObj = 10;
// console.log(myConstObj);

// console.log("Original Value of object: ", myConstObj);
// console.log();
// myConstObj.myKey = 10;
// console.log("After changing value of object: ", myConstObj);



// Operators

// Arithmetic Operators

// Binary Operators - Operates on two operands
// let x = 20;
// let y = 10; 
// console.log("x+y= ",x+y); //Addition
// console.log("x-y= ",x-y); //Subtraction
// console.log("x*y= ",x*y); //Multiplication
// console.log("x/y= ",x/y); //Division
// console.log("x%y= ",x%y); //Modulus - Remainder
// console.log("x**y= ",x**y); //Exponentiation -  x to the power y

// Unary Operators - Operates on one operand
// Increment and Decrement Operators
// ++ --

// x++, ++x similar to x=x+1
// Pre Increment 
// let z1 = (++x) + 5;
// console.log("Pre Increment: ",z1);
// Post Increment
// let z = (x++)+ 5;
// console.log("Post Increment: ",z);
// console.log("x: ",x);

// x--, --x similar to x=x-1
// Pre Decrement
// let z1 = (--x) + 5;
// console.log("Pre Decrement: ",z1);
// Post Decrement
// let z1 = (x--) + 5;
// console.log("Post Decrement: ",z1);


// Assignment Operators
// = += -= *= /= %= **=
// let x = 10;
// let x = 1;
// x += 100; //x = x + 100;
// console.log(x);
//  x-=10; //x = x - 10;
//  x*=200; //x = x * 200;
//  x/=10; //x = x / 10;
//  x%=1; //x = x % 1; 
// x**=2; //x = x ** 2; x to the power 2

// Comparison Operators
// == === != !== > < >= <=
// let x = 10;
// let y = 10;
// console.log(x == y); 
// console.log(x != y); 
// console.log(x < y); 
// console.log(x > y); 
// console.log(x <= y);
// console.log(x >= y);


// double equals (==) vs triple equals (===)
// let x = 10; //Number
// let y = "10"; //String

// console.log(x == y); //true 
// Double equals (==) checks only the value no matter what the datatype is. 
// Loose equality.

// console.log(x === y); //false
// Triple equals (===) checks the value and the datatype. 
// Strict equality.

// Not equals (!=) vs Not equals  (!==)
// console.log(x != y); //false //Checks only the value
// console.log(x !== y); //true //Checks the value and the datatype.


// Logical Operators
// && || !
// let x = 10;
// let y = 20;

// And Operator (&&)
// Both the conditions should be true
// console.log(x<y && x==y); //false

// // Or Operator (||)
// // Atleast one condition should be true
// console.log(x<y || x==y); //true

// // Not Operator (!)
// console.log(!true); //false

// Ternary Operators - needs three operands

// alert 
// alert(message);

// prompt
// prompt(message);
let num = prompt("Enter a number: ");
console.log(num);