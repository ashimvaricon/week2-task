// Calculate the total revenue generated

import salesData from "./json/salesData.json" assert { type: "json" };

function totalRevenue(data) {
  return data.reduce((total, item) => {
    return (total += item.quantity * item.price);
  }, 0);
}

const total_sale = totalRevenue(salesData);
console.log(total_sale);
