// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

// Note: You must not use sort() function in your entire code


function runProgram(input) {
    input = input.trim().split("\n");

    let arr1 = input[1].trim().split(" ").map(Number);
    let arr2 = input[2].trim().split(" ").map(Number);

    let arr = arr1.concat(arr2);

    console.log(arr.sort(function (a, b) { return a - b }).join(" "));


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