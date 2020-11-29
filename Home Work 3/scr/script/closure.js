"use strict";

class FigureCalculator {
  _firstSide = this.randomInteger(1, 20);
  _secondSide = this.randomInteger(1, 20);

  get firstSide() {
    return undefined;
  }

  set firstSide(value) {
    if (this.condition(value)) this._firstSide = Number(value);
  }

  get secondSide() {
    return undefined;
  }

  set secondSide(value) {
    if (this.condition(value)) this._secondSide = Number(value);
  }

  get perimetr() {
    return (
      "Perimetr of rectungle = " + 2 * (this._firstSide + this._secondSide)
    );
  }

  get square() {
    return "Square of rectungle = " + this._firstSide * this._secondSide;
  }

  condition(value) {
    if (
      !value &&
      Object.prototype.toString.call(value) !== "[object Number]" &&
      isNaN(value)
    ) {
      return false;
    } else {
      return true;
    }
  }

  randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}

const objectExample = new FigureCalculator();
console.log(objectExample);
console.log(objectExample.firstSide);
console.log(objectExample.secondSide);
objectExample.firstSide = 10;
objectExample.secondSide = 14;
console.log(objectExample);
console.log(objectExample.perimetr);
console.log(objectExample.square);
