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

Array.prototype.mySort = (array) => {
  for (let index = 0; index < array.length; index++) {
    for (let jindex = index + 1; jindex < array.length; jindex++) {
      if (array[index] > array[jindex]) {
        let cash = array[index];
        array[index] = array[jindex];
        array[jindex] = cash;
      }
    }
  }
  return array;
};

// console.log(Array.prototype.mySort([2, 5, 4, 0, 1, 3]));

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

// console.log(Array.prototype.myFind([2, 3, -24, 5, -6, 7], (elem) => elem < -5));
