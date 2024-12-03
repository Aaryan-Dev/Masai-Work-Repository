// Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.

function gs(str, new_str, index) {
  if (new_str.length !== 0) {
    console.log(new_str.join(" "));
  } else {
    console.log("");
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

function runProgram(input) {
  input = input.trim().split("\n");

  let N = +input[0];

  let str = [];

  for (let j = 0; j < N; j++) {
    str.push(j + 1);
  }

  gs(str, [], 0);
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
