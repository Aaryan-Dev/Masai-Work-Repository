// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

// -> Test cases are such that there is always one number greater than k

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION

function take(N, M, arr) {
  let low = 0;
  let high = arr.length - 1;

  let ans = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == M) {
      ans = mid + 1;
      low = mid + 1;
    } else if (arr[mid] < M) {
      low = mid + 1;
    } else {
      ans = mid;
      high = mid - 1;
    }
  }

  return ans;
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
