// Given an integer N, check if the number is power of 2 or not.

function number(num){
    
    let bag = "";
    for(let j =num ; j>=2; j = j/2){
        bag = bag + j
    }
    
    if(bag[bag.length-1]==2){
        console.log("True");
    }else{
        console.log("False");
    }
        
}



function runProgram(input) {
    input = input.trim().split("\n")
    let T = +input[0];
    let line = 1;
    
    for(let i=0; i<T; i++){
        let num = +input[line].trim();
        line++
        number(num);
        
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

