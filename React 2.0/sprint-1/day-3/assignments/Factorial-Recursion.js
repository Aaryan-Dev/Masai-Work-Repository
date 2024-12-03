// The factorial of a positive integer N is the product of all positive integers less than or equal to n:

// Given a number N your task is to write a program that calculates factorial of N

function take(N) {
  if (N === 1 || N === 0) {
    return 1;
  }

  return N * take(N - 1);
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
