function sum(a) {
  let cache = (b) => sum(a + b);
  cache.toString = () => a;
  return cache;
}

console.log(sum(1)(2)(3)(4));
