// Given n distinct numbers, implement iterative binary search to check the presence of target number k.

// In case k is present among those n numbers, print 1

// Else print -1

function take(N, M, arr) {
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
    // let mid = Math.floor((low + high)/2);
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == M) {
      return 1;
    } else if (arr[mid] < M) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function runProgram(input) {
  input = input.trim().split("\n");

  let NM = input[0].trim().split(" ").map(Number);
  let N = +NM[0];
  let M = +NM[1];

  let arr = input[1].trim().split(" ").map(Number);

  console.log(take(N, M, arr));
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
