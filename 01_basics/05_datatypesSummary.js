//Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)

// Array, Objects, Functions, 



//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.
const value = 100;
const countValue = 100.2;
let isLoggedIn = false;
const temp = null;

//Symbol is used to represent the unique element
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId); //false, as both the elements are unique
console.log(id);
console.log(anotherId);

const bigInteger = 987968756534245678798796436656n;
console.log(bigInteger);

//Array
const heros = ["Shaktiman", "Batman", "Spiderman"];

//object
const data = {
    name: "Shashi",
    age: 25,
    isActive: true
}

console.log(data);

//Function
const myFunction = function(){

    return "Hello World";
}

console.log(myFunction());

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */


// Stack, Heap Memory

//Stack is used in Primitive data type memory
//Heap is used in Non-Primitive data type memory

let myName = "Shashikiran";
let myAnotherName = myName;
myAnotherName = "Kulkarni";

console.log(myName);
console.log(myAnotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "shashi@gmail.com";

console.log(userOne);
console.log(userTwo);
