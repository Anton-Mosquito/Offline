let index = +prompt("Enter the start value of iteration", 0);
let maxIteration = +prompt("Enter the quantity of iteration", 10);

function forLoop(i, maxIteration, callback) {
  if (i <= maxIteration) {
    callback(i);
    i++;
    forLoop(i, maxIteration, callback);
  } else {
    return;
  }
}

let array = new Array();

forLoop(index, maxIteration, function (i) {
  array[i] = i;
});

console.log(array);
