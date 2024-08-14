//Calculate the highest total sales.

import salesData from "./json/salesData.json" assert { type: "json" };

function totalSales(data) {
  return data.map((item) => {
    return {
      product: item.product,
      totalSale: item.quantity * item.price,
    };
  });
}

const total_sale = totalSales(salesData);

//Find the highest sale now
const highestSale = total_sale.reduce((max, item) => {
  return item.totalSale > max.totalSale ? item : max;
});

console.log(highestSale);
