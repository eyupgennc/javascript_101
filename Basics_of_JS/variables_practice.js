let name1 = "ada";
let surname1 = "bilgi";
let birthYear1 = "2012";
let currentYear = new Date().getFullYear();
let std1_score1 = 70;
let std1_score2 = 40;
let std1_score3 = 50;
age1 = currentYear - parseInt(birthYear1);
avarage = (std1_score1 + std1_score2 + std1_score3) / 3;
let isSuccess = avarage > 70;

console.log(age1);
console.log(parseInt(avarage));
console.log(isSuccess);
