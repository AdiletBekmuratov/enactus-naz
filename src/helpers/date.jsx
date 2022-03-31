export const handleDateVal = (val) => {
  // var date = new Date(val);
  // var dd = String(date.getDate()).padStart(2, "0");
  // var mm = String(date.getMonth() + 1).padStart(2, "0");
  // var yyyy = date.getFullYear();
  // var hh = date.getHours();
  // var mm = date.getMinutes();

  // var date = dd + "/" + mm + "/" + yyyy + " " + hh + ":" + mm;

  const date = new Date(val);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const output = dd + "/" + mm + "/" + yyyy;
  return output;
};
