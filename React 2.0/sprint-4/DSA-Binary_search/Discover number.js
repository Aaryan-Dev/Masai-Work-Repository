// You are given an array A of size N, and Q queries to deal with. For each query, you are given an integer X, and you're supposed to find out if X is present in the array A or not.

function take(arr, X) {
  // console.log(arr, X)

  arr.sort(function (a, b) {
    if (a - b > 0) {
      return 1;
    } else if (b - a > 0) {
      return -1;
    } else {
      return 0;
    }
  });

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == X) {
      return 1;
    } else if (arr[mid] < X) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function runProgram(input) {
  input = input.trim().split("\n");

  let NQ = input[0].trim().split(" ");
  let N = +NQ[0];
  let Q = +NQ[1];
  let line = 2;

  let arr = input[1].trim().split(" ").map(Number);

  for (let q = 0; q < Q; q++) {
    let X = +input[line];
    line++;
    // take(arr, X);
    if (take(arr, X) === 1) {
      console.log("YES");
    } else {
      console.log("NO");
    }
    // console.log(arr, X);
  }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
