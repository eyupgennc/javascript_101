let fruits = ["apple", "orange", "pear", "banane", "strawberry"];

result = fruits.length;
result = fruits[0];
result = fruits[fruits.length - 1];
result = fruits.includes("apple");
result = fruits.push("berry");
result = fruits.splice(fruits.length - 2, 2);
console.log(result);
console.log(fruits);

let std1 = ["Zack Snyder", "2010", [70, 60, 80]];
let std2 = ["James Cameron", "2012", [80, 80, 90]];
let std3 = ["Bruce Willis", "2009", [60, 60, 70]];
let current = new Date();
currentYear = current.getFullYear();
let age_std1 = currentYear - std1[1];
let age_std2 = currentYear - std2[1];
let age_std3 = currentYear - std3[1];
let exam_std1 = parseInt((std1[2][0] + std1[2][1] + std1[2][2]) / 3);
let exam_std2 = parseInt((std2[2][0] + std2[2][1] + std2[2][2]) / 3);
let exam_std3 = parseInt((std3[2][0] + std3[2][1] + std3[2][2]) / 3);

console.log(
  "1. student's exam avarage: ",
  exam_std1,
  " 1. student's age: ",
  age_std1
);
console.log(
  "2. student's exam avarage: ",
  exam_std2,
  " 2. student's age: ",
  age_std2
);
console.log(
  "3. student's exam avarage: ",
  exam_std3,
  " 3. student's age: ",
  age_std3
);
