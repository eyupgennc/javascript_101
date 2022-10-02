let result;

result = 10;
result = "10";
result = Number("10");
result = parseInt("10.7");
result = parseFloat("10.7");
result = parseFloat("10.7a");
result = parseFloat("a10.7");

result = isNaN("10a");

let number = 14.12912312;
result = number.toPrecision(4);
result = number.toFixed(5);

result = Math.round(4.5);
result = Math.round(2.4);
result = Math.ceil(2.4);
result = Math.floor(2.4);
result = Math.sqrt(25);
result = Math.pow(2, 5);
result = Math.abs(-10);
result = Math.min(1, 4, 5, 2);
result = Math.max(5, 6, 8, 1);
result = Math.random();
result = Math.random() * 10;
result = Math.floor(Math.random() * 10) + 1;
result = Math.floor(Math.random() * 100) + 50;

console.log(typeof result);
console.log(result);
