// Now that you have learnt about geometric progression in Masai School pre-course, we hope you remember about the sum of a geometric series:

// Assume, you are given

// S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)

// You will be given two integers n and r

// Your task is to calculate the sum S by writing a recursive function

// Using iterative approach or formula to calculate the sum can lead to disqualification directly

function take(X, N) {
  if (X === 0) {
    return 1;
  }

  let square = N ** X;

  let value;
  if (X > 0) {
    value = 1 / square;
  }

  return value + take(X - 1, N);
}

function runProgram(input) {
  input = input.trim().split(" ");

  let X = +input[0];
  let N = +input[1];

  console.log(take(X, N).toFixed(4));
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
