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

console.log(stringNumber);

//33 -> 33 (string)
//null -> null
//undefined -> undefined



