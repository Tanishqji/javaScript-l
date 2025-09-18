const name = "tanishq";
const repoCount = 10;

console.log(name + repoCount + " Value");

// Correct template string
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sejwar-ts-com');

console.log(gameName[0]);

// Correct prototype
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

// Removed undefined variable console.log(newString);

const anotherString = gameName.slice(-8); 
console.log(anotherString);

const newStringOne = "   tanishq   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanishq.com/tanisq%20sejwar";

// Fixed missing parenthesis
console.log(url.replace('%20', '-'));

// includes()
console.log(url.includes('sundar'));

// split()
console.log(gameName.split('-'));
