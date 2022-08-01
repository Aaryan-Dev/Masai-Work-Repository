// You go to a shop to buy groceries.There are n items you have to buy. You are given an array of size n representing the price of these n items.

// You know that there is a discount coupon available that cost X rupees.

// This coupon gives you upto Y rupees off on all items, i.e. for all items that costs more than Y their price reduces by Y and others you get for 0 rupees.

// Determine whether you should buy the discount coupon or not. You should buy the discount coupon if and only if the total price you pay after buying the discount coupon is strictly less than the price you were paying without buying the discount coupon.

// Note : You have to take the input yourself


function find(N, X, Y, arr){
    let sum = 0;
    let sum1 = 0;
for(j=0; j<N; j++){
    sum = sum + arr[j]
    
    if(arr[j]>Y){
        sum1 = sum1 + (arr[j]-Y)
    }else {
        sum1 = sum1 + 0
    }
}
let newSum = (sum1+X);
if(newSum<sum){
    console.log("YES");
}else{
    console.log("NO");
    
}

}


function runProgram(input) {
input = input.trim().split("\n");
let T = +input[0];
let line = 1;

for(i=0; i<T; i++){
    let NXY = input[line].trim().split(" ").map(Number);
    let N = NXY[0]
    let X = NXY[1]
    let Y = NXY[2];
    line++
    let arr = input[line].trim().split(" ").map(Number);
    line++
   find(N, X, Y, arr)
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