//Calculate the total sales

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
console.log(total_sale);
