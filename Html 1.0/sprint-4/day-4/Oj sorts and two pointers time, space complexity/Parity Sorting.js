// Given an integer array. Sort the array in such a way that all the odd number are in the beginning of the array followed by the even numbers.

// The odd number and even number should follow an ascending order.

function put(N, arr) {

    let arrE = []
    let arrO = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrE.push(arr[i])
        } else {
            arrO.push(arr[i])

        }
    }
    arrO.sort(function (a, b) {
        return a - b
    })

    arrE.sort(function (a, b) {
        return a - b
    })

    arrOE = arrO.concat(arrE)
    console.log(arrOE.join(" "));
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    put(N, arr)
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