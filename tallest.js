const height = [65, 68, 72, 78, 60, 66, 40];
function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const max = getMax(height);
console.log("max value is", max);

//lower
const lower = [44, 23, 565, 28, 40, 100, 44];
function getMin(numbers2) {
  let min = numbers2[0];
  for (const num2 of numbers2) {
    if (num2 < min) {
      min = num2;
    }
  }
  return min;
}
const min = getMin(lower);
console.log("Lower value is: ", min);

const H = [44, 23, 565, 28, 40, 100, 44];
