/**
 * chair -->> 3 cft
 * table -->> 10 cft
 * bed -->> 50 cft
 */
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const allChairWood = chairQuantity * perChairWood;
  const allTableWood = tableQuantity * perTableWood;
  const allBedWood = bedQuantity * perBedWood;
  const total = allChairWood + allBedWood + allTableWood;
  return total;
}
const total = woodQuantity(10, 2, 2);
console.log("total wood", total);

/**
 * shirt price --> 500;
 * pant price --> 800;
 * shoe price --> 1200;
 */
function shopping(shirtQuantity, pantQuantity, shoeQuantity) {
  const perShirtPrice = 500;
  const perPantPrice = 800;
  const perShoePrice = 1200;
  const allShirtPrice = perShirtPrice * shirtQuantity;
  const allPantPrice = perPantPrice * pantQuantity;
  const allShoePrice = perShoePrice * shoeQuantity;
  const total = allShirtPrice + allPantPrice + allShoePrice;
  return total;
}
const total2 = shopping(5, 5, 4);
console.log("total shopping", total2);
