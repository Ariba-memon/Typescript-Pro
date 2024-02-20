// Core Data Types

// 1) string
/* strings are values that are written inside "" or '', representating textual data.
   Anything written inside "" or '' will be considered as string e.g:("abc", "123", "true")
*/

let stringTypeExample = "This is a string";
console.log(stringTypeExample);

// 2) number
/* Number type is fundamental for representing numeric data and performing mathematical
   operations within JavaScript programs. e.g:(1,10,100,100)
*/

let numberTypeExample = 100;
console.log(numberTypeExample);

// 3) boolean true and false
/* the boolean type represents a logical value that can be either true or false. Booleans
   are commonly used for conditions, comparisons, and logical operations.
*/

let booleanTypeExample1 = true;
console.log(booleanTypeExample1);

let booleanTypeExample2 = false;
console.log(booleanTypeExample1);

// Variables

/* Variables are used to store different types of data. In TypeScript, variables are declared
   using the let, const, or var keywords, similar to JavaScript.
*/

// How to decalre a variable?

// Variable Syntax

// let variableName: type = value;
// const constantName: type = value;

// Different Ways of Declaracing variables

// 1) var
// Variables declared with var can be redeclared and reassigned (values can be updated)

var message = "1234"; // '' , "" string
console.log(message);

var messageNew = "234";
console.log(messageNew);
var messageNew = "333";
console.log(messageNew);

// 2) let
// Variables with let can not be redeclared but can be reassigned (values can be updated)

let favouriteColor = "yellow";
console.log(favouriteColor);
favouriteColor = "black";
console.log(favouriteColor);

// 3) const
/* Variables with const can not be redeclared and can not be reassigned
  (values can not be updated) after declaration and initialization because
  they are fixed values
*/

const messageNew1 = "789";
console.log(messageNew1);

// Strong Typing

/* In Typescript assinging a data type to a variable on the time of declaration
   is known as Strong Typing 
*/

// Declaring and initailizing variable with Strong Typing

// let variableName: type = value;
// const constantName: type = value;

let userName: string = "Ayesha";
console.log(userName);
let Age: number = 80;
console.log(Age);
let ayesha_alive: boolean = true;
console.log(ayesha_alive);
