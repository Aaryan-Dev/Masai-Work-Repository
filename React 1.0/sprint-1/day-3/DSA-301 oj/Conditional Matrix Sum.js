// You are given a matrix(2 dimensional array) of integers of n rows and m columns. Your task is to write a program that calculates sum of all such integers present in the matrix which are divisible by 3.


function take(arr){
        // console.log(arr);
        let sum = 0
    for(let i=0; i<arr.length; i++){
        
        for(let j=0; j<arr[i].length; j++){
        if(arr[i][j]%3===0){
            sum = sum + arr[i][j]
        }
            
        }
        
    }
    
    console.log(sum);
}

function runProgram(input) {
    input = input.trim().split("\n");
    
    let NM = input[0];
    let N = NM[0];
    let M = NM[1];
    let line = 1;
    
    let Arr = []
    for(let n = 0; n<N; n++){
        
        let arr = input[line].trim().split(" ").map(Number);
        line++
        
       Arr.push(arr)
    }
    take(Arr);
    
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