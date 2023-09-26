function getArrayParams(...arr) {

  if (arr.length === 0) { return null; }
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
        max = arr[i];
    }
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce(function (currentSum, currentElement) {
    return currentSum + currentElement;
  }, 0)

}

function differenceMaxMinWorker(...arr) {
  return ((arr.length === 0) ? 0 : Math.max(...arr) - Math.min(...arr));
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 === 0) ? (sumEvenElement += arr[i]) : (sumOddElement += arr[i]);
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) { return 0; }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const res = func(...arrOfArr[i]);
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
