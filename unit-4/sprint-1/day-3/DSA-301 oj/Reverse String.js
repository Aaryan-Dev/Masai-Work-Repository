// Given a string , reverse it

// Use stack data structure for this purpose

function take(arr){
    let Arr = [];
    for(let i=arr.length-1; i>=0; i--){
        Arr.push(arr[i]);
    }
    console.log(Arr.join(""));
}

function runProgram(input) {
    
    input = input.trim().split("\n");
    
    let T = input[0];
    let line = 1;
    
    for(let t=0; t<T; t++){
    let arr = input[line];
    line++
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