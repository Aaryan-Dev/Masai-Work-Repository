// You are given two strings S1 and S2 of equal number of characters. Your task is to comment if any permutation of one string can form other or not.

// If it is possible, print "Yes" (without quotes)

// If it is not possible, print "No" (without quotes)


function put(arr1, arr2) {

    arr1 = arr1.sort(function (a, b) {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    })

    arr2 = arr2.sort(function (a, b) {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    })

    if (arr1.join(" ") == arr2.join(" ")) {
        console.log("Yes");
    } else {

        console.log("No");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let arr1 = input[0].trim().split("");
    let arr2 = input[1].trim().split("");
    put(arr1, arr2)
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