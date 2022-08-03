// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


function runProgram(input) {
    arr = input.trim().split("");

    let lenArr = [];
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let bag = ""
        for (j = i; j < arr.length; j++) {
            bag = bag + arr[j];
            // console.log(bag);

            let left = 0;
            let right = bag.length - 1
            let value = true;

            while (left < right) {
                if (bag[left] != bag[right]) {
                    value = false;
                    left++
                    right--
                    break;
                } else {
                    left++
                    right--
                }
            }

            if (value === true) {
                lenArr.push(bag.length);
                // console.log(bag);
            }
        }
    }
    console.log(lenArr.sort(function (a, b) { return b - a })[0]);
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