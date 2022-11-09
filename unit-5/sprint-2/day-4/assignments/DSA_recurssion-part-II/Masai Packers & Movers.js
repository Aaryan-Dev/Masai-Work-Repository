// Finally, India found the vaccine, and things have started getting normal. Offices are opening up, and therefore, you have to shift to Bangalore. Now, to transport your stuff, you hire Masai Packers & Movers. The company has N trucks, and each truck can hold only a certain amount of weight only. Also, because of surge in prices of Fuel, the company has implemented a new policy, that the truck will be granted to the customer, only if the truck is completely occupied, and no extra space is left.

// You have to transport K units of weight, since each truck will take the weight exactly equal to its capacity, find the number of ways, in which you can transport K units of weight.

// Note : Any truck can be sent any number of times.

function take(current, arr, N, K) {
  if (current === N) {
    return 1;
  }
  if (current > N) {
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
