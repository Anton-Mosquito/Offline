const myForEach = (array, callBack, thisArray) => {
  if (
    !Array.isArray(array) ||
    Object.prototype.toString.call(array) !== "[object Array]"
  ) {
    throw new Error("This data is not array!");
  } else {
    for (let index = 0; index < array.length; index++) {
      array[index] = callBack(array[index], index, thisArray);
    }
  }
  return array;
};

// console.log(myForEach([2, 3, 4], (elem, index) => elem * index));

const myMap = (array, callBack, thisArray) => {
  let newArray = [];
  if (
    !Array.isArray(array) ||
    Object.prototype.toString.call(array) !== "[object Array]"
  ) {
    throw new Error("This data is not array!");
  } else {
    for (let index = 0; index < array.length; index++) {
      newArray[index] = callBack(array[index], index, thisArray);
    }
  }
  return newArray;
};

// console.log(myMap([2, 3, 4], (elem, index) => (elem + index) * 5));

const mySort = (array, callBack) => {
  if (
    !Array.isArray(array) ||
    Object.prototype.toString.call(array) !== "[object Array]"
  ) {
    throw new Error("This data is not array!");
  } else {
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
  }
  return array;
};

console.log(
  mySort([2, 5, 4, 0, 1, 3], (currentElement, nextElement) => {
    return currentElement - nextElement;
  })
);

const myFilter = (array, callback, thisArray) => {
  let newArray = [];
  if (
    !Array.isArray(array) ||
    Object.prototype.toString.call(array) !== "[object Array]"
  ) {
    throw new Error("This data is not array!");
  } else {
    let jindex = 0;
    for (let index = 0; index < array.length; index++) {
      if (callback(array[index], index, thisArray)) {
        newArray[jindex] = array[index];
        jindex++;
      }
    }
  }
  return newArray;
};

// console.log(myFilter([2, 3, -24, 5, -6, 7], (elem) => elem % 2 === 0));

const myFind = (array, callback, thisArray) => {
  if (
    !Array.isArray(array) ||
    Object.prototype.toString.call(array) !== "[object Array]"
  ) {
    throw new Error("This data is not array!");
  } else {
    for (let index = 0; index < array.length; index++) {
      if (callback(array[index], index, thisArray)) {
        return array[index];
      }
    }
    return undefined;
  }
};

// console.log(myFind([2, 3, -24, 5, -6, 7], (elem) => elem < -5));
