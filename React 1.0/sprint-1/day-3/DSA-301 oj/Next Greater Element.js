// Given an array of N elements, find the next greater element for each element in the array, print -1 if
//  it does not exits.Refer to the sample I / O for better understanding
function take(arr) {
  var ans = [];
  var stack = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] >= stack[stack.length - 1]) {
      //  ans.push(stack[stack.length-1]);
      stack.pop(); //time complexity (O)N
    }
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      //  stack.pop();
      ans.push(stack[stack.length - 1]);
    }
    stack.push(arr[i]);
  }
  ans.reverse();
  console.log(ans.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let T = input[0];
  let line = 1;

  for (let t = 0; t < T; t++) {
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    take(arr);
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
