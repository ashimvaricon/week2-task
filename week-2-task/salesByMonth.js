//Calculating Sales By Month

import salesData from "./json/salesData.json" assert { type: "json" };

const filterSalesByDate = (sales, isoString) => {
  const date = new Date(isoString);
  const month = date.getMonth();
  const year = date.getFullYear();
  return sales.filter((sale) => {
    const saleDate = new Date(sale.date);
    const saleMonth = saleDate.getMonth();

    const saleYear = saleDate.getFullYear();
    return saleMonth === month && saleYear === year;
  });
};

console.log(filterSalesByDate(salesData, "2023-02-03T03:48:51.598Z"));
