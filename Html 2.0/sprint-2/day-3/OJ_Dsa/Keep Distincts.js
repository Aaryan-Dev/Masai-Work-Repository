// Given a string S. Your task is to remove all duplicates characters from the string S

// NOTE:

// 1.) Order of characters in output string should be same as given in input string.

// 2.) String S contains only lowercase characters ['a'-'z'].


function runProgram(input) {
    arr = input.trim().split("");

    let obj = {};
    let Arr = [];

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (obj[key] === undefined) {
            obj[key] = 1;
            Arr.push(key);
        }
    }
    console.log(Arr.join(""));
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