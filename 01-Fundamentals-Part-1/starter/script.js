/*
// Initial Example
let js = 'amazing';
// console.log(40 + 7 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Willy";

console.log(firstName);
console.log(firstName);
console.log(firstName);
*/
/*
// Variable Naming
//let 23andMe = 'no';         //Can't start with letter
//let jonas& matilda = "JM;   //Can't use symbols except $ and _
//let function = "function" ";  //reserved word

let name = "Me"; //works but causes problems
let Person = 'Jonas' //uppercase only for classes
let PI = 3.14;  //upper case for constants

let myFirstJob = "teacher";
let myCurrentJob = "programmer";

let job1 = "teacher";
let job2 = "programmer";

console.log(myFirstJob);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');
console.log(typeof "jonas");

//reassignment to another type
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); //prints object, which is a bug left for legacy reasons
*/

/*
let age = 30;
age = 31; //"mutate" a variable

const birthYear = 1991;
// birthYear = 1990; // Error

// const job;  //error
// Use const when possible

//var - old way, don't use

var job = 'programmer';
job = 'teacher';
// let is block scoped and var is function scoped

//Don't have to declare variables:
lastName = 'Cass'; //GLOBAL!!
console.log(lastName)
*/
/*
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2);
console.log(ageJonas / 10, 2 ** 3);

const firstName = 'Willy';
const lastName = 'Cass';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;
console.log(x);
x += 10; //x = x + 10
x *= 4; //x = x * 4
x++; //x = x + 1
x--;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); //same as line 103


//Order of operations

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
////////////////
// Coding Challenge # 1

//1.
const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;

//2.
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

//3.
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
*/
/*
const firstName = 'Willy';
const lastName = 'Cass';
const job = 'surgeon';
const birthYear = 1985;
const year = 2022;

const willy = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(willy);

const willyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(willyNew);
*/
/*
const age = 19;

if (age >= 18) {
    console.log('Sarah is old enough 🥳');
} else {
    console.log(`Sarah has to wait ${18 - age} years`);
}

const birthYear = 1991;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
// Coding challenge 2
const markHeight = 1.88;
const markWeight = 95;
const johnHeight = 1.76;
const johnWeight = 85;

//1.
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log("Mark has a higher BMI")
} else if (johnBMI > markBMI) {
    console.log("John has a higher BMI")
} else {
    console.log("They have the same BMI")
}

//2.
if (markBMI > johnBMI) {
    console.log(`Mark (BMI ${markBMI}) has a higher BMI than John (BMI ${johnBMI})`);
} else if (johnBMI > markBMI) {
    console.log(`John (BMI ${johnBMI}) has a higher BMI than Mark (BMI ${markBMI})`);
} else {
    console.log(`They have the same BMI: ${markBMI}`);
}
*/

// Double vs. Triple equal
const age = 18;
if (age === 18) console.log('You just turned 18!');  //Works
if (age === '18') console.log('You just turned 18!'); //DOESN't WORK
if (age == '18') console.log('You just turned 18!');  //Works
if (age == 18) console.log('You just turned 18!');  //Works
//Generally, avoid '==' can cause hard to find bugs

let favorite = prompt('What is your favorite number?');
console.log(favorite, typeof favorite);
if (favorite == 7) console.log('Good Choice!')
if (Number(favorite) === 7) console.log('Good Choice!')
//second one is preferred

if (favorite === '23') {
    console.log('1st');
} else if (favorite === '7') {
    console.log('2nd');
} else if (favorite !== '6') {
    console.log('why not 6?');
}
