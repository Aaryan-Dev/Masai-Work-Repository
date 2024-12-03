// You are given a arrayarrand its sizen. You need to print all elements of array in reverse order on new line.

// Use stack data structure for this question


function take(arr){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]!==Number){
        console.log(arr[i]);
        }
            
    }
}

function runProgram(input) {
    
    input = input.trim().split("\n");
    
    let arr = input[1].trim().split(" ");
    // console.log(arr);
    take(arr)
    
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