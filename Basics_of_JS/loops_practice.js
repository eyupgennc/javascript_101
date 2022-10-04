let numbers = [1, 5, 7, 15, 3, 25, 4, 6];

// Square of each element
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] ** 2);
// }

// Which elements are multiples of five
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 5 == 0) {
//     console.log(numbers[i]);
//   }
// }

// Find the summation of even numbers
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

let products = ["Mercedes-Benz", "Audi", "Volkswagen", "Audi a4", "Audi a5"];

// Print all items in capital letters
// for (let i = 0; i < products.length; i++) {
//   products[i] = products[i].toUpperCase();
// }
// console.log(products);

// How many products have Audi in the Products list?
// let counter = 0;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].includes("Audi")) {
//     counter += 1;
//   }
// }
// console.log(counter);

let students = [
  {
    name: "mark",
    surname: "zuckerberg",
    scores: [50, 60, 70],
  },
  {
    name: "elon",
    surname: "musk",
    scores: [80, 90, 100],
  },
  {
    name: "alex",
    surname: "meyer",
    scores: [50, 40, 10],
  },
];

let std1 = [];
let sum = 0,
  counter = 0,
  sum2 = 0,
  i;
for (i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].scores.length; j++) {
    sum += students[i].scores[j];
    counter += 1;
  }
  std1[i] = parseInt(sum / counter);
  console.log("GPA of the %d. student:", i + 1, parseInt(sum / counter));
  counter = 0;
  sum = 0;
}
for (let k = 0; k < std1.length; k++) {
  sum2 += std1[k];
}
console.log("GPA of the all student:", parseInt(sum2 / i));
