// You are given a string S. Print the reversed version of the string.

// Use stack data structure for this purpose


function take(arr){
    let Arr = [];
    for(let i=arr.length-1; i>=0; i--){
        Arr.push(arr[i]);
    }
    console.log(Arr.join(""));
}


function runProgram(input) {
    
    arr = input;
    
    take(arr);
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