// Finding the product with the highest total sales.

import { salesByProduct } from "./totalSales.js";

function highestTotalSale(salesByProduct) {
  return salesByProduct.reduce((acc, item) => {
    return salesByProduct[item] > salesByProduct[acc] ? item : acc;
  });
}

console.log(highestTotalSale(salesByProduct));
