let prod1 = "iphone12";
let prod2 = "iphone13";
let prod3 = "iphone14";

let products = ["iphone12", "iphone13", "iphone14"];
let prices = [1000, 2000, 3000];
let colours = ["red", "white", "gold"];

console.log(prices[0]);
console.log(prices[1]);
console.log(prices[2]);

console.log(`${products[0]}-${prices[0]}-${colours[0]}`);
console.log(`${products[1]}-${prices[1]}-${colours[1]}`);
console.log(`${products[2]}-${prices[2]}-${colours[2]}`);

let product1 = ["iphone12pro", 5000, ["rose", "gold", "black"]];
let product2 = [];
product2[0] = "iphone13pro";
product2[1] = 10000;
product2[2] = "navy blue";
console.log(product1[2][1]);
console.log(product2);

let txt = "my name is georgio";
console.log(txt.split(" "));
