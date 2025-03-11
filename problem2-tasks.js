//Find the lowest number in the array below.
// const lowest = [167, 190, 120, 137];

// function getLowest(numbers) {
//   let min = numbers[0];
//   for (const number of numbers) {
//     if (min > number) {
//       min = number;
//     }
//   }
//   return min;
// }
// const lowestNumber = getLowest(lowest);
// console.log("Lowest Number: ", lowestNumber);

// task-2
// find the friend with the smallest name.
// const names = ["rahim", "robin", "rafi", "ron", "rashed"];
// function smallestName(names) {
//   let min = names[0];
//   for (const name of names) {
//     if (min.length > name.length) {
//       min = name;
//     }
//   }
//   return min;
// }
// const smallName = smallestName(names);
// console.log(smallName);

// task-3
// Your task is to calculate the total budget required to buy electronics
// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk
// function calculateElectronicsBudget(
//   laptopQuantity,
//   tabletQuantity,
//   mobileQuantity
// ) {
//   const laptopPrice = 35000;
//   const tabletPrice = 15000;
//   const mobilePrice = 20000;
//   const totalLaptopPrice = laptopPrice * laptopQuantity;
//   const totalTabletPrice = tabletPrice * tabletQuantity;
//   const tableMobilePrice = mobilePrice * mobileQuantity;
//   const totalPrice = totalLaptopPrice + totalTabletPrice + tableMobilePrice;
//   return totalPrice;
// }
// const total = calculateElectronicsBudget(3, 4, 5);
// console.log(total);

// task 5

const mobiles = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "walton", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
// function findAveragePhonePrice() {
//   let totalPrice = 0;
//   mobiles?.map((mobile => mobile.price).forEach((price)=> {
//     return totalPrice += price)

//   }
// }

// console.log(findAveragePhonePrice());
// function findAveragePhonePrice() {
//   let totalPrice = 0;
//   mobiles?.map((mobiles) => mobiles.price).forEach(price);
// }

function findAveragePhonePrice(mobiles) {
  if (!mobiles || mobiles.length === 0) {
    return 0;
  }
}
const totalPrice = mobiles.reduce((sum, mobile) => sum + mobile.price, 0);
console.log(totalPrice);
