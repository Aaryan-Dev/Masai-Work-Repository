// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// For all columns, you have to print the sum of odd elements present in the column

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 8  (Odd numbers in the column are, [1,7]. Therefore, the sum becomes 8)
// 5  (Odd numbers in the column are, [5]. Therefore, the sum becomes 5)
// 12 (Odd numbers in the row are, [3,9]. Therefore, the sum becomes

function oddSumColumns(index, N, M, arr) {
  if (index == M) {
    return;
  }

  let sum = 0;

  for (let j = 0; j < N; j++) {
    if (arr[j][index] % 2 !== 0) {
      sum = sum + arr[j][index];
    }
  }

  console.log(sum);

  oddSumColumns(index + 1, N, M, arr);
}
