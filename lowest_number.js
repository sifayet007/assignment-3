const lowest = [167, 190, 120, 137, 55];
function getLowestNumber(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (min > num) {
      min = num;
    }
  }
  return min;
}
const lowestNumber = getLowestNumber(lowest);
console.log("Lowest Number: ", lowestNumber);
