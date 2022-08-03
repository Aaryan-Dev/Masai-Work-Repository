// Given a string S, you need to find the count of all contiguous substrings starting and ending with same character.

function runProgram(input) {
    arr = input.trim().split("");

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let bag = ""
        for (j = i; j < arr.length; j++) {
            bag = bag + arr[j];
            // console.log(bag);
            if (bag[0] == bag[bag.length - 1]) {
                count++
            }
        }
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