// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION

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

  // *****************************

  let Low = 0;
  let High = arr.length - 1;

  let highans = -1;
  while (Low <= High) {
    let mid = Math.floor(Low + (High - Low) / 2);
    if (arr[mid] == M) {
      highans = mid;
      Low = mid + 1;
    } else if (arr[mid] < M) {
      Low = mid + 1;
    } else {
      High = mid - 1;
    }
  }

  console.log(highans - ans + 1);
}
function runProgram(input) {
  input = input.trim().split("\n");

  let NM = input[0].trim().split(" ").map(Number);
  let N = +NM[0];
  let M = +NM[1];

  let arr = input[1].trim().split(" ").map(Number);

  take(N, M, arr);
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
