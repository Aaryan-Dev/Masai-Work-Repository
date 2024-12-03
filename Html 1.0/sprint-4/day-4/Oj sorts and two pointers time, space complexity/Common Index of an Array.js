// You are given two sorted arraysAandBof sizeNandM.
// You have to find the list of elements common in both the arrays
// The resultant list should also be sorted.
// Note: If there are not elements common in both the arrays, then print-1



function put(N, A, M, B) {
    // console.log(N, A, M, B);
    let left = 0
    let right = 0;
    let arr = [];
    while (left < A.length && right < B.length) {
        if (A[left] < B[right]) {
            left++
        } else if (A[left] > B[right]) {
            right++
        } else {
            arr.push(A[left]);
            left++
            right++
        }
    }

    if (arr.length === 0) {
        console.log(-1);
    } else {

        console.log(arr.sort(function (a, b) { return a - b }).join(" "));
    }
}


function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;

    for (let i = 0; i < T; i++) {

        let N = +input[line];
        line++
        let A = input[line].trim().split(" ").map(Number);
        line++
        let M = +input[line];
        line++
        let B = input[line].trim().split(" ").map(Number);
        line++

        put(N, A, M, B)

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