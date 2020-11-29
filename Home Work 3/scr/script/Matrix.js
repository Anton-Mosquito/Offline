function matrix(R, C, r0, c0) {
  const add = (R, C, x, y) => {
    if (x >= 0 && x < R && y >= 0 && y < C) {
      res.push([x, y]);
    }
  };

  let res = [];
  let step = 1;

  while (res.length < R * C) {
    for (let index = 0; index < step; ++index) {
      add(R, C, r0, c0++);
    }
    for (let index = 0; index < step; ++index) {
      add(R, C, r0++, c0);
    }
    ++step;
    for (let index = 0; index < step; ++index) {
      add(R, C, r0, c0--);
    }
    for (let index = 0; index < step; ++index) {
      add(R, C, r0--, c0);
    }
    ++step;
  }
  return res;
}
let R = 5,
  C = 6,
  r0 = 1,
  c0 = 4;

console.log(matrix(R, C, r0, c0));
