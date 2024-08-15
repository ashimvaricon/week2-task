// Calculate sales by month

import salesData from "./json/salesData.json" assert { type: "json" };

function salesByMonth(data, date) {
  const inputDate = new Date(date + "T00:00:00Z");
  console.log(inputDate);
  const month = inputDate.getMonth() + 1;

  const year = inputDate.getFullYear();

  return data.filter((record) => {
    const dates = new Date(record.date);
    return dates.getMonth() + 1 === month && dates.getFullYear() === year;
  });
}
const date = "2023-02-22";
console.log(salesByMonth(salesData, date));
