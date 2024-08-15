//Calculate the total sales for each product

import salesData from "./json/salesData.json" assert { type: "json" };
function totalSales(data) {
  return data.reduce((total, item) => {
    if (total[item.product]) {
      total[item.product] += item.quantity * item.price;
    } else {
      total[item.product] = item.quantity * item.price;
    }
    return total;
  }, {});
}
const totalSale = totalSales(salesData);
console.log(totalSale);

export const salesByProduct = Object.entries(totalSale);
