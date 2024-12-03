// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).


function put(N, K, arr) {


    //   for(i=0; i<arr.length-1; i++){
    //       for(j=0; j<arr.length-i-1; j++){
    //           if(arr[j]>arr[j+1]){
    //               swap(arr, j, j+1)
    //           }
    //       }
    //   }
    // function swap(arr, j, nJ){
    //     temp = arr[nJ];
    //     arr[nJ] = arr[j];
    //     arr[j] = temp;
    // }

    arr.sort(function (a, b) {
        return a - b
    })



    // console.log(N, K, arr);

    let left = 0
    let right = arr.length - 1;
    let count = 0

    while (left < right) {
        if (arr[left] + arr[right] > K) {
            right--
        } else if (arr[left] + arr[right] < K) {
            left++
        } else {
            count++
            // console.log(left, right);
            console.log(1);
            break;
        }

    }
    if (count === 0) {
        console.log(-1)
    }
}


function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;

    for (k = 0; k < T; k++) {
        let NK = input[line].trim().split(" ").map(Number);
        let N = NK[0];
        let K = NK[1];
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        put(N, K, arr)
        // console.log(N, K, arr);
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