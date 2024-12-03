// Given an integer array, return the count of all the subsets of the array, where the sum of all the elements in the subset is odd.

var Arr = [];
function gs(str, new_str, index) {
  if (new_str.length !== 0) {
    // console.log(new_str.join(" "));
    Arr.push(new_str.join(" "));
  } else {
    // console.log((""));
    Arr.push("");
  }
  if (index == str.length) {
    return;
  }
  for (var i = index; i < str.length; i++) {
    new_str.push(str[i]);
    gs(str, new_str, i + 1);
    new_str.pop();
  }
}
function call() {
  let count = 0;

  for (let k = 0; k < Arr.length; k++) {
    let val = Arr[k].split(" ").map(Number);
    let sum = 0;
    for (let j = 0; j < val.length; j++) {
      sum = sum + Number(val[j]);
    }
    // console.log(sum)
    if (sum % 2 !== 0) {
      count++;
    }
  }

  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");

  let str = input[1].trim().split(" ");

  str.sort(function (a, b) {
    if (a - b > 0) {
      return 1;
    } else if (b - a > 0) {
      return -1;
    } else {
      return 0;
    }
  });
  gs(str, [], 0);
  call();
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
