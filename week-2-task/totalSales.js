import salesData from "./json/salesData.json" assert { type: "json" };
//We should now use salesData to calculate total price using map

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
