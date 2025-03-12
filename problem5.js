function waitingTime(waitingTimes, serialNumbers) {
  if (
    !Array.isArray(waitingTimes) ||
    isNaN(serialNumbers) ||
    typeof serialNumbers === "string"
  ) {
    return "invalid Input";
  }
  const waitingTimeSum = waitingTimes.reduce(
    (sum, interview) => sum + interview,
    0
  );
  const avg = waitingTimeSum / waitingTimes.length;
  const average = Math.round(avg);
  const time = serialNumbers - waitingTimes.length - 1;
  const totalTime = time * average;
  return totalTime;
}
const interviewers = [13, 2, 6, 7, 10];
const isratSerial = 6;

const willTakeTime = waitingTime(interviewers, isratSerial);
console.log(willTakeTime);
