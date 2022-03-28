export const getIMTConclusion = (number) => {
  if (number < 16) {
    return "Выраженный дефицит массы тела";
  } else if (number >= 16 && number < 18.5) {
    return "Недостаточная (дефицит) масса тела";
  } else if (number >= 18.5 && number < 25) {
    return "Норма";
  } else if (number >= 25 && number < 30) {
    return "Избыточная масса тела (предожирение)";
  } else if (number >= 30 && number < 35) {
    return "Ожирение I степени";
  } else if (number >= 35 && number < 40) {
    return "Ожирение II степени";
  } else if (number >= 40) {
    return "Ожирение III степени";
  }
};

export const getRandomFloat = (min, max, decimals) => {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
};
