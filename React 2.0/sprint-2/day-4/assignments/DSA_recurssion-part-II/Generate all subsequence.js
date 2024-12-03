// A String is a subsequence of a given String, that is generated by deleting some character of a given string without changing its order.

// You are given a string S. You have to generate all the subsequences of the string S using a recursive approach (duplicates allowed)

function gs(str, new_str, index) {
  if (new_str.length != 0) {
    console.log(new_str.join(""));
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

  let str = input[1].trim().split("");

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