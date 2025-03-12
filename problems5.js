function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTime) ||
    isNaN(serialNumber) ||
    typeof serialNumber === "string"
  ) {
    return "Invalid Input";
  }
  const totalWaitingTime = waitingTimes.reduce(
    (sum, interview) => sum + interview,
    0
  );
}
const interviewers = [3, 5, 7, 11, 6];
const isratSerial = 10;

const willTakeTime = waitingTime(interviewers, isratSerial);
console.log(willTakeTime);
