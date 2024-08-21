/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let array1 = [1,2,3,4,5];
let array2 = array1; // array is copied by reference, not by value
array2.push(6);

console.log('second array:', array2);
console.log('first array:', array1);


// Copying an array
let array3 = [1,2,3,4,5];
let array4 = [...array3]; // array is copied by value
array4.push(6);

console.log('third array:', array3);
console.log('fourth array:', array4);

// Copying an object
let object1 = {key: 'value1', key2: 'value2', key3: 'value3'};
let object2 = {...object1, key4: 'value4'}; // object is copied by value and key is added
let object3 = {...object1, key: 'value5'}; // object is copied by value and key is overwritten

console.log('first object:', object1);
console.log('second object:', object2);
console.log('third object:', object3);

// Copying only part of an array/object
let array5 = [...array1, {...object1}, ...array3, 'another element'];
// array is copied by value and object is copied by value and key is added

console.log('fifth array:', array5);