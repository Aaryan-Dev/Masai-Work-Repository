// In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

// F (0) = 0 , F (1) = 1

// and

// F (n) = F (n − 1) + F (n − 2) ,

// for n > 1.

// Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n

function take(N) {
  if (N === 0 || N === 1) {
    return N;
  }

  return take(N - 1) + take(N - 2);
}

function runProgram(input) {
  let N = +input;

  console.log(take(N));
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
