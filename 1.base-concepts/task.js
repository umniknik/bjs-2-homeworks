"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  //if (d < 0) {};
  if (d === 0) {
    arr[0] = -b / (2 * a);
  };
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  };


  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  percent = parseInt(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);
  countMonths = parseInt(countMonths);

  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)) {
    let P = percent / 100 / 12;
    let S = amount - contribution;
    let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
    let totalAmount = +(monthlyPayment * countMonths).toFixed(2);
    return totalAmount;
  } else {
    return false;
  }

}
