function greetings(msg) {
  console.log(msg);
}
console.log("hello, World!");

function ageCalculator(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function retirementCalculator(birthYear) {
  let age = ageCalculator(birthYear);
  if (age > 65) {
    console.log("yeah buddy");
  } else console.log("sorry");
}

retirementCalculator(2001);
