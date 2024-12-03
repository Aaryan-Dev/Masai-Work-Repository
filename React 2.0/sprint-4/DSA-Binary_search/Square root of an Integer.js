// You are given an integerN, find the square root of the given integerN. If the integer is not a perfect square, print the floor value of the given integer.

// Note:- The floor value is the largest integer value lesser than a given number K. For example if the value ofK = 3.679, the floor value ofKis3.

// Note:You are not allowed to use any inbuilt function.

// Note: Try printing output only once, then individually for each test case.

function take(x) {
  let left = 0;
  let right = x;

  if (x < 2) {
    return x;
  }
  while (left < right) {
    let val = Math.floor(left + (right - left) / 2);

    if (mid * mid == x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
}

function runProgram(input) {
  input = input.trim().split("\n");

  let T = +input[0];
  let line = 1;

  for (let t = 0; t < T; t++) {
    let N = +input[line];
    line++;
    console.log(take(N));
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
