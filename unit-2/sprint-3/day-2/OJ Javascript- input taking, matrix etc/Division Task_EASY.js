// You are given a number N. Let us say the floor ( Ref:https://en.wikipedia.org/wiki/Floor_and_ceiling_functions) of 32 divided by N is x

// Print as per following rules

// * In case x is 0, print "Too Low"

// * In case it is not possible to generate a valid number, print -1

// * In all other cases, print x


function number(input){
    let X = Math.floor(32/input);
    
    if(X===0){
        console.log("Too Low");
    }else if(input===0){
        console.log(-1);
    }else{
        console.log(X);
    }
    
}

function runProgram(input) {
    input = +input
    number(input);
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