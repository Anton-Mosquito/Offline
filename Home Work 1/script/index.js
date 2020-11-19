"use strict";

const maxElement = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[0]) {
      arr[0] = arr[index];
    }
  }
  console.log("Max value of masive " + arr[0]);
};

const minElement = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < arr[0]) {
      arr[0] = arr[index];
    }
  }
  console.log("Min value of masive " + arr[0]);
};

const sumOfArray = (arr) => {
  let sumOfArray = null;
  for (let index = 0; index < arr.length; index++) {
    if (!arr[index]) continue;
    sumOfArray += arr[index];
  }
  console.log("Sum of masive " + sumOfArray);
};

const taskWithWater = (arr) => {
  let wallStartMax = 0;
  let wallEndMax = 0;
  let start = 0;
  let end = arr.length - 1;
  let result = 0;

  while (start < end) {
    if (arr[start] > wallStartMax) {
      wallStartMax = arr[start];
    }
    if (arr[end] > wallEndMax) {
      wallEndMax = arr[end];
    }
    if (wallStartMax >= wallEndMax) {
      result += wallEndMax - arr[end];
      end--;
    } else {
      result += wallStartMax - arr[start];
      start++;
    }
  }
  console.log("Quantity of water pits = " + result);
};

maxElement([231, -4, 5435, -324, 34.54435, -65464.324]);
minElement([231, -4, 5435, -324, 34.54435, -65464.324]);
sumOfArray([231, -4, 5435, -324, 34.54435, -65464.324]);
taskWithWater([7, 0, 1, 3, 4, 1, 2, 1]);

// [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// [7, 0, 1, 3, 4, 1, 2, 1] // 9
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// [2, 2, 2, 2, 2] // 0
