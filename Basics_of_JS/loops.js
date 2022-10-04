let sum = 0;

// for (let i = 0; i < 10; i++) {
//   sum += i;
// }
// console.log(sum);

let numbers = [10, 11, 12, 13, 14, 15];

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// for (let i in numbers) {
//   sum += numbers[i];
// }

// for (let num of numbers) {
//   sum += num;
// }
// console.log(sum);

let user = {
  name: "eyup",
  surname: "genc",
  age: 21,
  email: "eyup@gmail.com",
};

for (let key in user) {
  console.log(user[key]);
}
