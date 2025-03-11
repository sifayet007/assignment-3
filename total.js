const products = [
  { name: "shampoo", price: 300 },
  { name: "chiruni", price: 100 },
  { name: "shirt", price: 700 },
  { name: "pent", price: 1200 },
  { name: "shoe", price: 1500 },
];
function getShoppingTotal(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}
const total = getShoppingTotal(products);
console.log("total shopping: ", total, "tk");
