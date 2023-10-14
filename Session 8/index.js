//OOPS
//Object Oriented Programming in JS
//1. Encapsulation => Binding data and functions together
// class Counter{
//     constructor(){
//         let count =0;
//         this.increment = function(){
//             count++;
//             console.log("Counted incremented to ",count);
//         }
//         this.decrement = function(){
//             count--;
//             console.log("Counted decremented to ",count);
//         }
//         this.getCount = function(){
//             return count;
//         }
//     }
// }

// const c = new Counter();
// c.increment();
// c.increment();
// c.decrement();
// console.log("Final : ",c.getCount());


//2. Abstraction => Hiding the details
// class Vehicle{
//     constructor(model,name){
//         this.model = model;
//         this.name = name;
//     }
//     //abstract method
//     startEngine(){
//         throw new Error("This method should be implemented");
//     }
// }

// class Car extends Vehicle{
//     constructor(model,name){
//         super(model,name);
//     }
//     startEngine(){
//         console.log("Starting engine of ",this.name, " with model ",this.model);
//     }
// }
// class MotorCycle extends Vehicle{
//     constructor(model,name){
//         super(model,name);
//     }
//     startEngine(){
//         console.log("Starting engine of ",this.name, " with model ",this.model);
//     }
// }

// const car = new Car("X5","BMW");
// car.startEngine();
// const bike = new MotorCycle("Ninja","Kawasaki");
// bike.startEngine();

//3. Inheritance => Reusing code - inheriting the properties and methods of parent class
// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log("Hello ",this.name," you are ",this.age," years old");
//     }
// }

// class Student extends Person{
//     constructor(name,age,grade){
//         super(name,age);
//         this.grade = grade;
//     }
//     greet(){
//         console.log("Hello ",this.name," you are ",this.age," years old and you are in grade ",this.grade);
//     }
// }

//4- Polymorphism => poly- many, morphism - forms => method overriding

// class Animal{
//     speak(){
//         console.log("Animal speaks");
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log("Cat meows");
//     }
// }

// const dog = new Dog();
// const cat = new Cat();
// dog.speak();
// cat.speak();