let name = "Ozgur";
let surname = "Sevım";
let age = 20;
let retirements =
  65 - age > 0
    ? 65 - age + " years until my retirements"
    : "You are already retired";

total = `My name is ${name} and my surname is ${surname}. I am ${age}. ${retirements}`;

console.log(total);
