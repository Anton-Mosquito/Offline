Array.prototype.myForEach = (array, callBack, thisArray) => {
  for (let index = 0; index < array.length; index++) {
    array[index] = callBack(array[index], index, thisArray);
  }
  return array;
};

// console.log(
//   Array.prototype.myForEach([2, 3, 4], (elem, index) => elem * index)
// );

Array.prototype.myMap = (array, callBack, thisArray) => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = callBack(array[index], index, thisArray);
  }
  return newArray;
};

// console.log(
//   Array.prototype.myMap([2, 3, 4], (elem, index) => (elem + index) * 5)
// );

Array.prototype.mySort = (array, callBack) => {
  for (let index = 0; index < array.length; index++) {
    for (let jindex = 0; jindex < array.length; jindex++) {
      if (callBack(array[jindex], array[jindex + 1]) > 0) {
        array[index] = array[jindex + 1];
        array[index + 1] = array[jindex];
      } else if (callBack(array[index], array[jindex + 1]) < 0) {
        array[index] = array[jindex];
        array[index + 1] = array[jindex + 1];
      } else if (callBack(array[index], array[jindex + 1]) === 0) {
        array[index] = array[index];
        array[index + 1] = array[jindex + 1];
      }
    }
    console.log(array);
  }
  return array;
};

// This script doesn't work!
// console.log(
//   Array.prototype.mySort([2, 5, 4, 0, 1, 3], (currentElement, nextElement) => {
//     return currentElement - nextElement;
//   })
// );

Array.prototype.myFilter = (array, callback, thisArray) => {
  let jindex = 0;
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, thisArray)) {
      newArray[jindex] = array[index];
      jindex++;
    }
  }
  return newArray;
};

// console.log(Array.prototype.myFilter([2, 3, -24, 5, -6, 7], (elem) => elem % 2 === 0));

Array.prototype.myFind = (array, callback, thisArray) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, thisArray)) {
      return array[index];
    }
  }
  return undefined;
};

console.log(Array.prototype.myFind([2, 3, -24, 5, -6, 7], (elem) => elem < -5));
