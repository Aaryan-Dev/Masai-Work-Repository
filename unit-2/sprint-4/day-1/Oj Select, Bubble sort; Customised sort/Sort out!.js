// Given an array A of non - negative integers of size ** m **.Your task is to sort the array in non - decreasing order and print out the original indices of the new sorted array.

//     Example:

// A = { 4, 5, 3, 7, 1}

// After sorting the new array becomes A = { 1, 3, 4, 5, 7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// You can only write your own sorting algorithm must not use builtin functionality of sort()


function sortOut(N, arr) {

    let index = [];
    for (let x = 0; x < N; x++) {
        index.push(x);
    }
    //  console.log(index);

    for (let i = 0; i < N - 1; i++) {
        for (j = 0; j < N - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(index, arr, j, j + 1);
            }
        }
    }

    function swap(arr, index, x, nX) {
        temp = arr[nX];
        arr[nX] = arr[x];
        arr[x] = temp;

        temp1 = index[nX];
        index[nX] = index[x];
        index[x] = temp1;
    }




    console.log(index.join(" "));
    // console.log(arr);
}

function runProgram(input) {
    input = input.trim().split("\n");

    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    sortOut(N, arr)
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