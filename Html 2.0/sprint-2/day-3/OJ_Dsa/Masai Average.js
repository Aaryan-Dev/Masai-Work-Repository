// Given an array, A, of N integers, print the of average of numbers present in given array

function runProgram(input) {
    input = input.trim().split("\n");
    let arr = input[1].trim().split(" ").map(Number);


    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(Math.ceil(sum / arr.length));
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