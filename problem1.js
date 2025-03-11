function calculateTax(incomes, expenses) {
  const income = incomes - expenses;
  const tax = (income * 20) / 100;
  if (tax < 0) {
    return "Invalid Input";
  }
  return tax;
}
const income = calculateTax(10000, 3000);
console.log(income);
