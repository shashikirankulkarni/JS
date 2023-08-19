let score = undefined;
//console.log(typeof score);
score = Number(score);
//console.log(typeof(score));
//console.log(score);

//"33" -> 33
//null -> 0
//"33abc" -> NaN
//"" -> 0
//undefined -> NaN

let isLoggedIn = undefined;
let booleanLoggedIn = Boolean(isLoggedIn);
//console.log(booleanLoggedIn);

//1 -> true
//"1" -> true
//"1abc" -> true
//"0" -> true
//0 -> false
//null -> false
//"" -> false
//undefined -> false

let someNumber = undefined;

let stringNumber = String(someNumber);

//console.log(stringNumber);

//33 -> 33 (string)
//null -> null
//undefined -> undefined

/************************************************Operations**************************************************/

let value = 3;
let negValue = - value;
//console.log(negValue);

let str1 = "hello";
let str2  = " Shashi";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

//console.log(+true);
//console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
//console.table([num1,num2,num3]);

let gameCounter = 0;
gameCounter++;
console.log(gameCounter++);
console.log(++gameCounter);








