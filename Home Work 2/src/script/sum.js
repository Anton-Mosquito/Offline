function sum() {
  let cache = (x) => sum(arguments[0] + x);
  cache.toString = () => arguments[0];
  return cache;
}

console.log(sum(1)(2)(3)(4));
