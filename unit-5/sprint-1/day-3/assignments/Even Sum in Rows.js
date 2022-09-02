// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// For all rows, you have to print the sum of even elements present in the row

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
// 10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10)
// 8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8

function evenSumRows(index, N, M, arr) {
  if (index == N) {
    return;
  }

  let sum = 0;

  for (let m = 0; m < M; m++) {
    if (arr[index][m] % 2 === 0) {
      sum = sum + arr[index][m];
    }
  }

  console.log(sum);

  evenSumRows(index + 1, N, M, arr);
}
