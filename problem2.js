function sendNotification(email) {
  if (!email.include("@")) {
    return "Invalid Email";
  }
}
const gmail = "zihad@gmail.com";
const result = sendNotification(gmail);
console.log(result);
