//Calculating the higest total sales

import { salesByProduct } from "./totalSales.js";

function highestTotalSale(salesByProduct) {
  const sortedSales = salesByProduct.sort((a, b) => b[1] - a[1]);

  return sortedSales;
}

console.log(highestTotalSale(salesByProduct));
