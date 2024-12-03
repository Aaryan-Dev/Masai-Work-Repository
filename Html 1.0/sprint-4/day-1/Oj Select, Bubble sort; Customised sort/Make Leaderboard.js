// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm

function map(names, marks) {


    console.log(names, marks);
    function swap(names, marks, i, j) {
        var temp = names[i];
        names[i] = names[j];
        names[j] = temp;

        var temp1 = marks[i];
        marks[i] = marks[j];
        marks[j] = temp1;
    }

    function swapOrNot(str1, str2) {
        var length = Math.min(str1.length, str2.length);
        for (var i = 0; i < length; i++) {
            if (str1[i] != str2[i]) {
                return true;
            } else {
                return false;
            }
        }

        return false;
    }

    function sortNames(names, marks) {
        for (var i = 0; i < names.length - 1; j++) {
            for (var j = 0; j < names.length - i - 1; j++) {
                if (swapOrNot(names[j], names[j + 1]) === true) {
                    swap(names, marks, j, j + 1);
                }
            }
        }
    }


    function sortMarks(names, marks) {
        for (var i = 0; i < marks.length - 1; i++) {
            for (var j = 0; j < marks.length - i - 1; j++) {
                if (marks[j] < marks[j + 1]) {
                    swap(names, marks, j, j + 1)
                }
            }
        }
    }


    function printRank(names, marks) {
        var previous = -1;
        var rank = 1;
        var count = 0;
        for (var i = 0; i < marks.length; i++) {
            if (marks[i] == previous) {
                console.log(rank + " " + names[i]);
            } else {
                rank += count;
                console.log(rank + " " + names[i]);
                count = 0;
            }
            count++
            previous = marks[i];

        }
    }

    sortNames(names, marks);
    sortMarks(names, marks);
    printRank(names, marks);

}


function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let line = 1;

    let Name = [];
    let Marks = [];

    for (let i = 0; i < N; i++) {
        let NamRan = input[line].trim().split(" ");
        line++
        Name.push(NamRan[0]);
        Marks.push(NamRan[1]);

    }

    map(Name, Marks);

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