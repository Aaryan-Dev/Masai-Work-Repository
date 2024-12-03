// Santosh is a milk man, and supplies milk to local shops. Due to lockdown, the demand for milk has increased substantially but due to surge in the prices of Petrol & Diesel, he has incurred some loss. Santosh is thinking of someway to maximize this profit. He is a smart man, and hence figures out, that  if he delivers  4 or 8 containers of milk, on each trip ,gives him the maximum return. Therefore, he decides that he will only carry 4 or 8 containers of milk for every delivery. To find the maximum profit that he can get with this arrangement, find the number of ways in which he can deliver N containers of milk, if for each visit he takes only 4 or 8 containers with him.

function take(current, N) {
  if (current === N) {
    return 1;
  }
  if (current > N) {
    return 0;
  }

  return take(current + 4, N) + take(current + 8, N);
}

function runProgram(input) {
  input = input.trim().split("\n");

  let T = +input[0];
  let line = 1;

  for (let t = 0; t < T; t++) {
    let N = +input[line];
    line++;
    console.log(take(0, N));
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
