let current = new Date();

// Get methods
result = current;
result = current.getDate();
result = current.getDay();
result = current.getFullYear();
result = current.getHours();
result = current.getTime();

// Set methods
current.setFullYear(2025);
current.setMonth(5);
current.setDate(12);

result = current;

console.log(result);
console.log(typeof result);
