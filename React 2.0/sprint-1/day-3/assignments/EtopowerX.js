// One famous series says

// Using the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.

function take(X, N) {
  // console.log(X, N);

  if (N === 1) {
    return X + 1;
  }
  if (N === 0) {
    return 1;
  }

  function fac(N) {
    if (N === 0 || N === 1) {
      return 1;
    }
    return N * fac(N - 1);
  }

  let value;
  if (N > 1) {
    value = X ** N / fac(N);
  }

  return value + take(X, N - 1);
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
