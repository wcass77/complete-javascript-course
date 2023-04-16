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
