// John Nash, the famous American Mathematician, is currently working on sets.

// Apart from being a great Mathematician, he is very particular about the order of numbers. Therefore, he wants everything in order.

// He is going to be working on two arrays, but he wants to merge them together, to use his time optimally. Therefore, he asks you, his assistant, to merge the two array, and form a new array, and arrange it in ascending order of numbers.

// Note that after joining the two arrays, the newly formed array must not contain any duplicate elements


function cal(N, M, arr, arr2) {

    let Arr = arr2.concat(arr);
    // console.log(Arr);

    let obj = {}

    for (let i = 0; i < Arr.length; i++) {
        let key = Arr[i]
        if (obj[key] === undefined) {
            obj[key] = 1
        } else {
            obj[key]++
        }
    }
    //  console.log(obj);
    let arrr = [];
    for (let k in obj) {
        arrr.push(k)
    }
    console.log(arrr.sort(function (a, b) {
        return a - b

    }).join(" "));
}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;

    for (let l = 0; l < T; l++) {


        let N = +input[line]
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        let M = +input[line]
        line++
        let arr2 = input[line].trim().split(" ").map(Number);
        line++
        cal(N, M, arr, arr2);

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