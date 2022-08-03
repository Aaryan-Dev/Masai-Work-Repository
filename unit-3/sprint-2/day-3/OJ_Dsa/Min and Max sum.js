// You have given an array of size N and an integer M.

// Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

// Do not use built-in functions to sort the array use selection sort Algorithm


function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;

    for (let t = 0; t < T; t++) {

        let a = input[line].trim().split(" ");
        let N = +a[1];
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        arr.sort(function (a, b) { return a - b })
        console.log((arr[arr.length - 1] + N) - (arr[0] + N));

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