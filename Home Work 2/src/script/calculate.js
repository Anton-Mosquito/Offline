function Calc() {
  (this.value = null),
    (this.calculate = function (num) {
      this.value = num;
      return this;
    }),
    (this.add = function (num) {
      this.value += num;
      return this;
    }),
    (this.multiply = function (num) {
      this.value *= num;
      return this;
    }),
    (this.result = function () {
      console.log(this.value);
    });
}

let calc = new Calc();
calc.calculate(3).add(2).multiply(2).result();
