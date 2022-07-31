// You are given two arrays of same size stored in variables with the nameAandB

// The size of the arrays is stored in a variable with the nameN

// You have to find the product of all the numbers stored in the two arrays

// For example, consider the value stored inN = 3, andA = [1 2 3]andB = [2 3 1]

// Then, the product of the elements in the two arrays will be1*2*3*2*3*1 = 36, which is the required output


function arrary(N, arr1, arr2){
    
    let pro = 1
   for(j=0; j<arr1.length; j++){
       pro = pro*arr1[j]
   }
   
   let pro1 = 1
   for(k=0; k<arr2.length; k++){
       pro1 = pro1*arr2[k]
   }
   console.log(pro*pro1);
       
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;
    
    for(let i =0; i<T; i++){
    let N = +input[line];
    line++
    let arr1 = input[line].trim().split(" ").map(Number);
    line++
    let arr2 = input[line].trim().split(" ").map(Number);
    arrary(N, arr1, arr2);
    line++
    
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