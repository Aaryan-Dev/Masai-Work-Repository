// Given an array containing N elements, you have to find the absolute difference between the number of odd and even elements in an array.

function take(N, arr){
    
    let count = 0;
    let count1 = 0;
    for(let i=0; i<N; i++){
        if(arr[i]%2===0){
            count++
        }else{
            count1++
        }
    }
    let sum = count-count1;
    if(sum<0){
        console.log(-sum);
    }        else{
        console.log(sum);
    }
} 
        

function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    take(N, arr)
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