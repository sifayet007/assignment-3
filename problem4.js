function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) || obj == null) {
    return "Invalid Input";
  }
  if (obj.isFFamily === true) {
    obj.isFFamily = 20;
  } else if (obj.isFFamily === false) {
    obj.isFFamily = 0;
  }
  const sum = obj.testScore + obj.schoolGrade + obj.isFFamily;
  if (sum > 80) {
    return true;
  }
  return false;
}
const parson = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};
// const parson = [1, 2, 3, 4];

const parsonScore = calculateFinalScore(parson);
console.log(parsonScore);
