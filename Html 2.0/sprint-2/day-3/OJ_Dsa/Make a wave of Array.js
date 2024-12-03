// Given an array of length N , sort the array into a wave-like pattern.

// An array is sorted in waveform if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=  and so on ...


function runProgram(input) {
    input = input.trim().split("\n");
    let arr = input[1].trim().split(" ").map(Number);

    arr.sort(function (a, b) { return a - b });

    let left = 0;
    let right = arr.length;

    while (left < right) {

        swap = arr[left + 1]
        arr[left + 1] = arr[left];
        arr[left] = swap
        left = left + 2
    }
    console.log(arr.join(" "));
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