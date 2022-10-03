let students = ["max", "peter", "jack"];

result = students.length;

// array to string
result = students.toString();
result = students.join("-");

// deletion of items
// result = students.pop();         //last item deleted
// result = students.shift();       //first item deleted

// addition of items
result = students.push("zack"); //item is added to the end of the array
result = students.unshift("harry"); //item is added to the beginning of the array

let brands1 = ["mercedes", "audi"];
let brands2 = ["toyota", "nissan"];
let brands3 = ["ram", "chervolet"];

result = brands1.concat(brands2);

console.log(result);
console.log(brands1);
console.log(students);
