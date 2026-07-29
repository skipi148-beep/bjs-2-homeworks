function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = +((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
