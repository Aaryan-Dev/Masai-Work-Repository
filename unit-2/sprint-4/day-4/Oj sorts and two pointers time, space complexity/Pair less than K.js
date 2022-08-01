// You are given an array A of N integers, and an integer K. Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.

// Refer the sample test case for better understanding.


function put(N, K, arr) {

    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] < K) {

                arr1.push(arr[i] + arr[j]);

            }
        }
    }
    // console.log(arr1);
    let max = -Infinity

    for (l = 0; l < arr1.length; l++) {
        if (max < arr1[l]) {
            max = arr1[l]
        }
    }
    if (arr1.length === 0) {
        console.log(-1)
    } else {
        console.log(max);
    }


}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;

    for (let k = 0; k < T; k++) {
        let N = +input[line];
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        let K = +input[line];
        line++
        put(N, K, arr)
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