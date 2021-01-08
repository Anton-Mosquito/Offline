function perform(...args1) {
  let func1 = args1.pop();
  let result = func1.apply(this, args1);
  return {
    then: function (...args2) {
      let func2 = args2.pop();
      return perform.apply(this, [...args2, result, func2]);
    },
  };
}

perform(20, function (value) {
  console.log(value);
  var param = 1;
  console.log(param);
  return param;
})
  .then(function (param) {
    console.log(++param);
    return param;
  })
  .then(function (param) {
    console.log(++param);
    return param;
  });

/////// My Promise
const moop = () => {};
class MyPromise {
  constructor(executor) {
    this.queue = [];
    this.errorHandler = moop;
    this.finnalyHndler = moop;

    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this));
    } catch (e) {
      this.errorHandler(e);
    } finally {
      this.finnalyHndler();
    }
  }

  onResolve(data) {
    this.queue.forEach((callback) => {
      data = callback(data);
    });

    this.finnalyHndler();
  }

  onReject(error) {
    this.errorHandler(error);
    this.finnalyHndler();
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }

  catch(fn) {
    this.errorHandler = fn;
    return this;
  }

  finally(fn) {
    this.finnalyHndler = fn;
    return this;
  }
}

const myPromise = new MyPromise();

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("NgRx");
    // reject("Some Error");
  }, 150);
});

promise
  .then((course) => {
    console.log("Promise ", course.toUpperCase());
  })
  .then((title) => console.log(title))
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => console.log("finnaly"));
