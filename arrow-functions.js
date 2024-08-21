/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbersVanilla(a,b){
    // code block
    return a + b;
}
let sum = addTwoNumbersVanilla(3,5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a,b) => {
    // code block
    return a + b;
}
let sum2 = addTwoNumbers(3,5);
console.log(sum2);

// Single Line Arrow Function With Parameters
// const addTwoNumbersSingleLine = (a,b) => (a + b); //also valid
const addTwoNumbersSingleLine = (a,b) => a + b;

let sum3 = addTwoNumbersSingleLine(3,5);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);

saySomething('Hello there!');

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
);

console.log(returnMultipleLines());