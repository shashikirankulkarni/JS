const name = "Shashi";
const repoCount = 100;
console.log(name + repoCount);

//string interpolation
console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Kulkarni-Shashi");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.charAt(1));
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('K'));

const newString = gameName.substring(0,8);
console.log(newString);

const anotherString = gameName.slice(14, -15);
console.log(anotherString);


const newString1 = "    shashi";
console.log(newString1);
console.log(newString1.trim());

const url = "https://shashi.com/shashi%20kulkarni";
console.log(url.replace("%20",'-'));
console.log(url.includes("kulkarni"));

console.log(gameName.split(''));