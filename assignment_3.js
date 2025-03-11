//problem 1
// function calculateTax(incomes, expenses) {
//   const income = incomes - expenses;
//   const tax = (income * 20) / 100;
//   if (tax < 0) {
//     return "Invalid Input";
//   }

//   return tax;
// }

// const incomeExpenses = calculateTax(10000, 3000);
// console.log(incomeExpenses);

// problem 2
// function sendNotification(gmail) {
//   if (!gmail.includes("@")) {
//     return "Invalid Email";
//   }
//   const word = gmail.split("@");
//   let text = word.join(" sent you an email from ");
//   return text;
// }
// let text = "zihad.ph@gmail.com";
// const word = sendNotification(text);
// console.log(word);

//problem 3
// const checkDigitsInName = (names) => true;
// if (typeof names !== "string") {
//   return " Invalid Input";
// }
// for (const name of names) {
//   if (!isNaN(name)) return true;

// }
// return false;
// };

// const name = checkDigitsInName("rafi1");
// console.log("Name", name);

//problem 4
function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return "Invalid Input";
  }
  if (obj.isFFamily === true) {
    obj.isFFamily = 20;
  }
  let sum = obj.testScore + obj.schoolGrade + obj.isFFamily;

  // const sum = obj
  //   .map((score) => score.finalScore)
  //   .reduce((sum, curr) => sum + curr);

  // let total = 0;
  // for (let isObj in obj) {
  //   if ( obj.hasOwnProperty(isObj)) {
  //     total += obj[isObj];
  //   }
  // }

  if (sum > 80) {
    return true;
  }
  return false;
}
const parson = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};
// const parson = [1, 2, 3, 4];

const finalScore = calculateFinalScore(parson);
// console.log(finalScore);

// problem 5
function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    isNaN(serialNum) ||
    typeof serialNum !== "number"
  ) {
    return "Invalid Input";
  }
  let sum = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    sum += waitingTimes[i];
  }

  const avg = sum / waitingTimes.length;
  const average = Math.round(avg);

  let serial = serialNumber - waitingTimes.length - 1;
  const waitingTime = serial * average;

  return waitingTime;
}
const waitingArray = [3, 5, 7, 11, 6];
const serialNum = 10;
const willTakeTime = waitingTime(waitingArray, serialNum);
console.log(willTakeTime);
