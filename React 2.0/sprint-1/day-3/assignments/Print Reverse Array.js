// You are given a arrayarrand its sizen. You need to print all elements of array in reverse order on new line.

function printReverseArray(N, arr) {
  if (N < 0) {
    return;
  }

  console.log(arr[N]);
  printReverseArray(N - 1, arr);
}
