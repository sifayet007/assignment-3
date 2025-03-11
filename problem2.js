function sendNotification(email) {
  if (!gmail.includes("@")) {
    return "Invalid Input";
  }
  const splitEmail = email.split("@");
  const joinEmail = splitEmail.join(" sent you an email from ");
  return joinEmail;
}
const gmail = "zihad.ph@gmail.com";
const result = sendNotification(gmail);
console.log(result);
