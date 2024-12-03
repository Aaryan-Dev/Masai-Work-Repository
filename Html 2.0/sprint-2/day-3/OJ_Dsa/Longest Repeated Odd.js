// You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.


function runProgram(input) {
    input = input.trim().split("\n");
    let arr = input[1].trim().split(" ").map(Number);


    let count = 1;
    let Arr = []
    let index = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == arr[i + 1]) {
            count++
        } else {
            if (arr[i] % 2 !== 0) {
                index.push(i)
                Arr.push(count);
            }
            count = 1
        }

    }

    if (Arr.length === 0) {
        console.log(0)
    } else {

        console.log(Arr.sort(function (a, b) { return b - a })[0]);
        // console.log(index);
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