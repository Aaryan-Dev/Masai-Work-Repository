// Given an array of n elements. You can arrange the elements whichever way you want to. All you need to do is to find that permutation of integers of the array in which the sum of index multiplied by arr[index] is maximum.

// Basically maximum possible value of:

// Σ arr[i] * i


function runProgram(input) {
    input = input.trim().split("\n");

    let arr = input[1].trim().split(" ").map(Number);

    (arr.sort(function (a, b) { return a - b }));

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] * i
    }
    console.log(sum);
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