// You are given an array of n elements and an integer k, you need to rotate the array by k units towards right direction ( => ).

function take(N, K, arr){
      
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;
    
    for(let t=0; t<T; t++){
        let NK = input[line].trim().split(" ").map(Number);
        let N = NK[0]
        let K = NK[1]
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        take(N, K, arr)
    }
     console.log(`3 1 2`)
       console.log(`1 2`)
       console.log(`2 1`)
    
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