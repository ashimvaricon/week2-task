// Calculate sales by month

import salesData from "./json/salesData.json" assert { type: "json" };

function salesByMonth(data, year, month) {
  return data.filter((record) => {
    const dates = new Date(record.date);
    return dates.getMonth() + 1 === month && dates.getFullYear() === year;
  });
}

const year = 2023;
const month = 2;

console.log(salesByMonth(salesData, year, month));
