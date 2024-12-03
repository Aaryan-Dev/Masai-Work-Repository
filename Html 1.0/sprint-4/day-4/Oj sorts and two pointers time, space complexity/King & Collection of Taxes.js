// The King of Somerville, is a noble king, and is considerate about his citizens. After the recent survey, he found out that the amount of tax paying citizens in his kingdom is 2N. So, he decides to impose a new rule on his kingdom for the collection of taxes. He decides that all the people will be divided into groups of 2 each, and the tax collected from each group will be equal to the maximum of the tax amount of the two members. To take care of his poor citizens, he decides a strategy. At every iteration, the citizen which has the minimum tax amount, and is not part of any other group is paired with the citizen, which has the maximum tax amount, and is not part of any other group.

// You are given an array of size 2N, and the elements of the array denote the tax amount of the citizens. Find out the tax collected if the citizens are divided into groups using the above strategy.


function put(N, arr) {

    arr.sort(function (a, b) {
        return a - b
    })

    // console.log(N, arr);
    let sum = 0
    for (let i = (arr.length / 2); i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
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