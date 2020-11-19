function sum(first) {
  return function (second) {
    return function (thid) {
      return first + second + thid;
    };
  };
}

console.log(sum(1)(2)(3));
