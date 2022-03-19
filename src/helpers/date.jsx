export const handleDateVal = (val) => {
  var date = new Date(val);
  console.log({ date });
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  var yyyy = date.getFullYear();
  var hh = date.getHours();
  var mm = date.getMinutes();

  var date = dd + "/" + mm + "/" + yyyy + " " + hh + ":" + mm;
  return date;
};
