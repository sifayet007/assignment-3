const num1 = 56;
const num2 = 89;
const kim = 68;

if (num1 > num2 && num1 > kim) {
  console.log("jim boss");
} else if (num2 > num1 && num2 > kim) {
  console.log("tim boss");
} else {
  console.log("kim boss");
}

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const number = maxOfThree(888, 999, 7586);
console.log("boss: ", number);
