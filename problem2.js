function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  const emailSplit = email.split("@");
  const emailJoin = emailSplit.join(" sent you an email from ");
  return emailJoin;
}
const gmail = "zihad@gmail.com";

const result = sendNotification(gmail);
console.log(result);
