// You are given a string, You have to print the first non-repeating character of the string if exists, else print "Not Found".

// In the given sample input

// S = "racecars"

// r, a and c appear 2 times, e and s appear 1 time.

// and e is the first non-repeating character.


function runProgram(input) {
    arr = input.trim().split("");

    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        if (obj[key] === undefined) {
            obj[key] = 1;
        } else {
            obj[key]++
        }
    }
    let value = true;
    for (let k in obj) {
        if (obj[k] === 1) {
            value = false
            console.log(k);
            break;
        }
    }
    if (value) {
        console.log("Not Found");
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