/**
 * To run this file in Gitpod, use the 
 * command node es6-destructuring.js in the terminal
 */

//without destructuring

/*
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
*/

// Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe] = ages;
console.log(john,mary,joe);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
}
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages =  ['english','french','spanish','german','japanese'];
let [johnNative,johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [,, maryNative, MarySecondary] = languages; //skips the first two elements
console.log(maryNative, MarySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
}

let {firstLanguage, thirdLanguage} = languages2; //selects the first and third elements
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ['apple','orange','banana','peach','cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegeterian",
    andrea: "steak"
};

let {brian, anna, ...rest} = favoriteFoods;

console.log(brian);
console.log(anna);
console.log(rest);


/*
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

let [john, ...rest] = students.map(student => [student.name, student.results]);

console.log(john);
console.log(rest);

//problem solution for codeinstitute course 
*/
