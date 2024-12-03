// You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.

function take(N, M, arr) {
  let low = 0;
  let high = arr.length - 1;

  let ans = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == M) {
      ans = mid;
      high = mid - 1;
      // return ans
    } else if (arr[mid] < M) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (ans === -1) {
    return -1;
  } else {
    return ans;
  }
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
