// You are given an array, you have to traverse the array recursively

// You need not complete the function, you just need to complete the function

// Note : You need to implement a recursive function for it

function printArray(index, arr) {
  if (index == arr.length) {
    return;
  }
  console.log(arr[index]);
  printArray(index + 1, arr);
}
