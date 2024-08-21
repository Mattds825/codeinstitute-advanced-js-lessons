/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];

let result = [];
for (let num of nums) {
  result.push(num * 2);
}

console.log(result);

// Using map()

const multiplyByTwo = function (num) {
  return num * 2;
};

const mapResult = nums.map(multiplyByTwo);
console.log(mapResult);

// Simplified w/ map()

const mapResult2 = nums.map(function (num) {
  return num * 2;
});
console.log(mapResult2);

// Simplfied w/ map() + arrow function

const mapResult3 = nums.map((num) => num * 2);
console.log(mapResult3);

// With objects:
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript",
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
  },
];

const studentsWithIds = students.map((student) => [student.name, student.id]);
console.log(studentsWithIds);

const studentsWithIdsObj = students.map((student) => ({
  name: student.name,
  id: student.id,
}));
console.log(studentsWithIdsObj);

const studentsWithAge = students.map((student) => ({ ...student, age: 34 })); // add age to each student object using spread operator);
console.log(studentsWithAge);
