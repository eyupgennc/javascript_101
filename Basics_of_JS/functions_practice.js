// Function that writes the word sent to it to the screen at the specified time

function funny(word, xtimes) {
  for (let i = 0; i < xtimes; i++) {
    console.log(word);
  }
}
funny("eyup", 5);

// Calculation of the area and perimeter of a rectangle

function calculationOfRectangle(width, length) {
  area = width * length;
  perimeter = 2 * (width + length);

  console.log(
    `area of the rectangle ${area}, perimeter of the rectangle ${perimeter}`
  );
}
calculationOfRectangle(10, 20);

// Heads and Tails function

function headsAndTails() {
  let rand = parseInt(Math.random() * 10 + 1);

  if (rand > 5) {
    console.log("HEADS!");
  } else console.log("TAILS!");
}
headsAndTails();

// Write a function that returns the divisors of a number sent to it as an array.

let list = [];

function calculate(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      list.push(i);
    }
  }
  console.log(list);
}
calculate(10);

// Define a function called sum that takes a variable number of parameters

function sum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum(2, 4, 6, 7, 8));
