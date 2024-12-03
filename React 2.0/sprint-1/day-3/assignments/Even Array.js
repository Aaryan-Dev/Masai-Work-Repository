// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print only the even elements in the array.

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the required output will be

// 2
// 4
// The above are the only two even numbers in the given array

function evenArray(n, arr) {
  if (n === arr.length) {
    return;
  }
  if (arr[n] % 2 === 0) {
    console.log(arr[n]);
  }

  evenArray(n + 1, arr);
  // The initial value of n = 0
}
