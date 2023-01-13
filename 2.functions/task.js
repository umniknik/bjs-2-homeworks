function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
    if (arr[i] < min) {
      min = arr[i];
    };
    sum += arr[i];
  }

  let avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  sum = 0;
  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;

  if (arr.length > 0) {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      };
      if (arr[i] < min) {
        min = arr[i];
      };
    }

    difference = max - min;

  }

  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

  if (arr.length > 0) {

    for (let i = 0; i < arr.length; i++) {
      (arr[i] % 2 > 0) ? sumOddElement += arr[i] : sumEvenElement += arr[i];
    }

    difference = sumEvenElement - sumOddElement;
  }

  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avgEvenElements = 0;

  if (arr.length > 0) {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      };
    }

    avgEvenElements = sumEvenElement / countEvenElement;

  }

  return avgEvenElements;

}

function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for (let j = 0; j < arrOfArr.length; j++) {
    let funcResult = func(...arrOfArr[j]);

    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }

  }

  return maxWorkerResult;
};