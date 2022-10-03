let userA = {
  name: "eyup",
  surname: "genc",
  age: 21,
  address: {
    city: "Istanbul",
    district: "beyoglu",
  },
  hobbys: ["movie", "book"],
};
let userB = {
  name: "hakan",
  surname: "bulut",
  age: 24,
  address: {
    city: "Istanbul",
    district: "nisantasi",
  },
  hobbys: ["bike", "swim"],
};

let users = [userA, userB];

let result;

result = userA.name;
result = userA["surname"];
result = userA.address.district;
result = userA.hobbys[1];

result = users[1].name;

let products = [
  {
    name: "iphone12",
    price: 1200,
  },
  {
    name: "iphone13",
    price: 1400,
  },
];

result = products[1].price;
console.log(result);
