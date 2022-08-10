const ftoc = function(tempFah) {
  let tempCel;
  let round;
  tempCel = (tempFah - 32) * (5/9)
  round = Math.round(tempCel*10)/10

  return round


};

const ctof = function(tempCel) {
  let tempFah;
  let round;
  tempFah = tempCel * (9/5) + 32
  round = Math.round(tempFah*10)/10

  return round
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
