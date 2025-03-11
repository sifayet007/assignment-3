// problem 1
function calculateTax(income, expenses) {
  const totalIncomes = income - expenses;
  const tax = (totalIncomes * 20) / 100;
  if (tax < 0) {
    return "Invalid Input";
  }
  return tax;
}
const totalIncomes = calculateTax(-5000, 2000);
console.log(totalIncomes);

//problem 2
function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  const text = email.split("@");
  const notification = text.join(" sent you an email from ");
  return notification;
}
const gmail = "zihad.ph@gmail.com";
const notification = sendNotification(gmail);
console.log(notification);
