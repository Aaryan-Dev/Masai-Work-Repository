// You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.


function runProgram(input) {

    input = input.trim().split("\n");

    let arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);

    let left = 0
    let right = arr.length;
    let count = 0;

    if (arr[0] > arr[1]) {
        count++
    }
    while (left <= right) {

        if (arr[left] > arr[left + 1] && arr[left] > arr[left - 1]) {
            count++
        }

        left++
    }
    if (arr[right - 1] > arr[right - 2]) {
        count++
    }
    console.log(count);
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