const disha = 56;
const salman = 74;
if (disha > salman) {
  console.log("disha will get the strawberry");
} else {
  console.log("salman will eat the strawberry");
}

// inside a function
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const number = getMax(54, 85);
console.log(number);

//metMax

const max = getMax(85, 36);
const max2 = getMax(99, 150);
const ultimateMax = getMax(max, max2);
console.log(ultimateMax);
console.log("max of two is:", max);
