// Dr. Strange is back again and this time he has an array A with n integers which may have duplicates. So he again uses his mind power and time stone to calculate all the possible subsets of the input array A. Generate all the possible subsets.

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
  //   console.log(Arr)

  let Prr = [];

  let obj = {};

  for (let j = 0; j < Arr.length; j++) {
    let key = Arr[j];
    if (obj[key] === undefined) {
      obj[key] = 1;
      Prr.push(key);
    } else {
      obj[key]++;
    }
  }

  // console.log(Prr)

  for (let k = 0; k < Prr.length; k++) {
    console.log(Prr[k]);
  }

  // for(let o in obj){
  //     console.log(o)
  // }
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
