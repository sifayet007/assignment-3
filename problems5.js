function waitingTime(waitingTimes, serialNumbers) {
  if (
    !Array.isArray(waitingTimes) ||
    isNaN(serialNumbers) ||
    typeof serialNumbers === "string"
  ) {
    return "Invalid Input";
  }
  const totalWaitingTime = waitingTimes.reduce(
    (sum, interview) => sum + interview,
    0
  );
  const avg = totalWaitingTime / waitingTimes.length;
  const average = Math.round(avg);
  const totalSerial = serialNumbers - waitingTimes.length - 1;
  const totalTime = average * totalSerial;
  return totalTime;
}
const interviewers = [3, 5, 7, 11, 6];
const isratSerial = 10;

const willTakeTime = waitingTime(interviewers, isratSerial);
console.log(willTakeTime);
