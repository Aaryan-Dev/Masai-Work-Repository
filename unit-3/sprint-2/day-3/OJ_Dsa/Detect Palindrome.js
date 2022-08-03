// < !--Given an integer, print "Yes"(without quotes) if that integer is aPalindrome, else print "No"(without quotes)

// You must write a recursive function to achieve this

// You must not use the reverse() function. Using that would lead to disqualification-- >

function runProgram(input) {
    input = input.trim().split("")




    let left = 0;
    let right = input.length - 1
    let value = true;

    // console.log(input[left]);
    while (left <= right) {
        if (input[left] != input[right]) {
            console.log("No");
            left++
            right--
            break;
        }
        value = false;
        left++
        right--
    }
    if (value === false) {
        console.log("Yes");
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