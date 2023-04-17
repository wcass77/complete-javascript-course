console.log("\n-------------------------------\n\n");
//Assignment 1
const country = 'USA';
const continent = 'North America';
let population = 300 * 10 ** 6;

// console.log(country);
// console.log(continent);
// console.log(population);

//Assignment 2
const isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//Assignment 3
language = 'english';
//country = 'Canada'; //ERROR

//Assignment 4
console.log(population / 2); //#1
console.log(++population); //#2
console.log(population > 6 * 10 ** 6); //#3
console.log(population < 33 * 10 ** 6); //#4
console.log(country + ' is in ' + continent + ', and its ' + --population / (10 ** 6) + ' million people speak ' + language);