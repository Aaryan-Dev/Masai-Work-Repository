// Consider a money system consisting of n coins. Each coin has a positive integer value.

// Your task is to calculate the number of distinct ways you can produce a money sum x using the available coins.

function take(current, arr, N, K) {
  if (current === K) {
    return 1;
  }
  if (current > K) {
    return 0;
  }

  var count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = count + take(current + arr[i], arr, N, K);
  }

  return count;
}

function runProgram(input) {
  input = input.trim().split("\n");

  let NK = input[0].trim().split(" ");
  let N = +NK[0];
  let K = +NK[1];

  let arr = input[1].trim().split(" ").map(Number);

  console.log(take(0, arr, N, K));
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
