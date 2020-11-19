let array = [];
let index = 1;
let maxIteration = +prompt("Enter the quantity of array elements", 10);

function forLoop(i, maxIteration) {
  if (i <= maxIteration) {
    array[i - 1] = i;
    i++;
    forLoop(i, maxIteration);
  } else {
    return;
  }
}

// forLoop(index, maxIteration);
// console.log(array);
