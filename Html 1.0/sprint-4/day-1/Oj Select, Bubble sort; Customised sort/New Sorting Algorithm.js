// Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

// 1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

// 2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

// Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.


function nSort(N, K, arr) {

    for (let i = 0; i < N - 1; i++) {
        for (j = 0; j < N - i - 1; j++) {
            if (arr[j] % K > arr[j + 1] % K) {
                swap(arr, j, j + 1);
            }
        }
    }

    function swap(arr, j, nJ) {
        temp = arr[nJ];
        arr[nJ] = arr[j];
        arr[j] = temp;
    }
    console.log(arr.join(" "));
}


function runProgram(input) {

    input = input.trim().split("\n");
    let NK = input[0].trim().split(" ").map(Number);
    let N = NK[0];
    let K = NK[1];

    let arr = input[1].trim().split(" ").map(Number);

    nSort(N, K, arr);
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