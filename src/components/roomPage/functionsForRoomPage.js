const toRequiredFormatDate = (fromDate, toDate, fromTime, toTime) => {
  let dateFrom;
  let dateTo;

  let from = new Date(fromDate);
  from.setHours(fromTime.getHours());
  from.setMinutes(fromTime.getMinutes());
  console.log(from);
  dateFrom = from.toISOString();
  console.log(`это дата и время С:  ${dateFrom}`);

  let to = new Date(toDate);
  to.setHours(toTime.getHours());
  to.setMinutes(toTime.getMinutes());
  dateTo = to.toISOString();
  console.log(`это дата и время ДО:  ${dateTo}`);

  return [{ from: dateFrom, to: dateTo }];
};

export { toRequiredFormatDate };
