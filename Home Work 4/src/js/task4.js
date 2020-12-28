//isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {
  if (isNaN(num) || num < 0 || num != num << 0 || num === 0 || num === 1)
    return false;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5, N = Math.sqrt(num); i <= N; i += 2)
    if (num % i === 0) return false;
  return true;
}
// console.log(isPrime(0)); // false
// console.log(isPrime(1)); // false
// console.log(isPrime(17)); // true
// console.log(isPrime(10000000000000)); // false

// factorial - Returns a number that is the factorial of the given number.
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(6)); // 720

// fib - Returns the nth Fibonacci number.
function fib() {
  if (arguments[0] == 0 || arguments[0] == 1) {
    return arguments[0];
  } else {
    return fib(arguments[0] - 1) + fib(arguments[0] - 2);
  }
}
// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(10)); // 55
// console.log(fib(20)); // 6765

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
}
// console.log(isSorted([])); // true
// console.log(isSorted([-Infinity, -5, 0, 3, 9])); // true
// console.log(isSorted([3, 9, -3, 10])); // false

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr.join("");
}
// console.log(reverse("")); // ''
// console.log(reverse("abcdef")); // 'fedcba'

//indexOf - Implement the indexOf function for arrays.
function indexOf(array, value) {
  let result;
  if (!array.includes(value)) {
    result = -1;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      result = i;
    }
  }
  return result;
}
// console.log(indexOf([1, 2, 3], 1)); // 0
// console.log(indexOf([1, 2, 3], 4)); // -1

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str) {
  const anotherStr = str
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  str = str.replace(/\s/g, "").toLowerCase();
  return str === anotherStr ? true : false;
}
// console.log(isPalindrome("")); // true
// console.log(isPalindrome("abcdcba")); // true
// console.log(isPalindrome("abcd")); // false
// console.log(isPalindrome("A man a plan a canal Panama")); // true

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing(array) {
  array = array.sort((a, b) => a - b);
  let carry;
  let missing;
  if (array.length === 0) {
    missing = undefined;
  } else if (array[0] !== 1) {
    missing = 1;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        carry = array[i];
      } else {
        if (carry === array[i] - 1) {
          missing = undefined;
          carry = array[i];
        } else {
          missing = carry + 1;
        }
      }
    }
  }
  return missing;
}
// console.log(missing([])); // undefined
// console.log(missing([1, 4, 3])); // 2
// console.log(missing([2, 3, 4])); // 1
// console.log(missing([5, 1, 4, 2])); // 3
// console.log(missing([1, 2, 3, 4])); // undefined

// 9; // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(string) {
  let braket = [];
  let result;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "{" || string[i] == "}") {
      braket.push(string[i]);
    }
  }
  let catchThis = 0;
  if (braket.length <= 1 || braket[0] == "}") {
    result = false;
  } else {
    for (let i = 0; i < braket.length; i++) {
      if (braket[i] == "{") {
        catchThis++;
      } else {
        catchThis--;
      }
    }
    if (catchThis == 0) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}
// console.log(isBalanced("}{")); // false
// console.log(isBalanced("{{}")); // false
// console.log(isBalanced("{}{}")); // false
// console.log(isBalanced("foo { bar { baz } boo }")); // true
// console.log(isBalanced("foo { bar { baz }")); // false
// console.log(isBalanced("foo { bar } }")); // false
