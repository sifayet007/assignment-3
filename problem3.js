function checkDigitsInName(names) {
  if (typeof names !== "string") {
    return "Invalid Input";
  }
  for (const name of names) {
    if (/\d/.test(name)) {
      return true;
    }
  }
  return false;
}
const digitsName = checkDigitsInName("sifat123");
console.log(digitsName);
