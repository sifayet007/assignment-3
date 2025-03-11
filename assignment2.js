// problem 1
function calculateTax(incomes, expenses) {
  const totalIncomes = incomes - expenses;
  const tax = (totalIncomes * 20) / 100;

  if (tax < 0) {
    return "Invalid Input";
  }
  return tax;
}
const income = calculateTax(10000, 3000);
// console.log(income);

// problem 2
function sendNotification(emails) {
  if (!emails.includes("@")) {
    return "Invalid Email";
  }
  const email = emails.split("@");
  const newEmail = email.join(" sent you an email from ");
  return newEmail;
}
const gmail = "zihad.ph@gmail.com";
const notification = sendNotification(gmail);
console.log(notification);
