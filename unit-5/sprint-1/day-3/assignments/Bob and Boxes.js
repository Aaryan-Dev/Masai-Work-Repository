// Bob the builder has a task of transferring a number of boxes, containing construction material, to a location for     construction. The workers are waiting for the construction material to arrive, so it is imperative that he gets the boxes delivered on time. His crane is designed in such a way, that he can only carry 1,3 or 5 boxes at a time. Wendy is worried for him, and to help him, wants to find the number of ways in which the boxes can be delievered. So, she asks you for a help. Help her find out the number of ways in which the boxes can be delievered.

function take(current, N) {
  if (current === N) {
    return 1;
  }

  if (current > N) {
    return 0;
  }

  return take(current + 1, N) + take(current + 3, N) + take(current + 5, N);
}

function runProgram(input) {
  let N = +input;

  console.log(take(0, N));
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
