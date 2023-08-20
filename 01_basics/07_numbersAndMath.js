const score = 400;
const balance = new Number(1000);
console.log(score);
console.log(balance);
console.log(typeof balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(5));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

/******************************************Math**********************************************/

//Maths is the library in Javascript

console.log(Math.abs(-567));
console.log(Math.round(67.5));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.2));
console.log(Math.sqrt(81));

console.log(Math.min(10,6,4,7,68,434));
console.log(Math.max(10,6,4,7,68,434));

console.log(Math.round((Math.random()*10) + 1));

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


