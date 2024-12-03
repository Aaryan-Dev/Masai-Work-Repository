// You are given a 2d array with n  rows and mcolumns where n and m are always odd. There are two different parts present in the 2d array and the sum of all the elements of the first part is referred as sum1 and that of the other is referred as sum2. You have to find the absolute difference between sum1 and sum2.

// Look at the given figure to have a better idea of the two different parts

// Image

// As seen, sum1 is formed by all the elements starting from top-right -> to middle column then bisects the figure vertically and then goes to the bottom left of the 2d array

// Similarly. sum2 is formed by all the elements in the top left -> to middle row then bisects the figure horizontally and then goes to the bottom right of 2d array

function array(N, M, Anarray){
        
    let sum = 0;
for(let j = M-1; j>=((M-1)/2); j--){
    sum = sum +(Anarray[0][j]);
    }
    
for(let k=1; k<N; k++){
   sum = sum +(Anarray[k][((M-1)/2)]);
}   

for(let l = ((M-1)/2)-1; l>=0; l--){
    sum = sum +(Anarray[N-1][l]);
}
    let sum1 = 0
    for(let m=0; m<=((N-1)/2); m++){
       sum1 = sum1 +(Anarray[m][0]);
    }
    for(let n=1; n<M-1; n++){
        sum1 = sum1 +(Anarray[((N-1)/2)][n]);
    }
    for(let o=((N-1)/2); o<N; o++){
        sum1 = sum1 +(Anarray[o][M-1]);
    }
   
        let diff = sum - sum1
if(diff<0){
    console.log(-diff);
}else{
    console.log(diff);
}
}


function runProgram(input) {
input = input.trim().split("\n")
let NM = input[0].trim().split(" ").map(Number);
let N = NM[0];
let M = NM[1];
let line = 1;
let Anarray = [];
for(let i=0; i<N; i++){
    let arr = input[line].trim().split(" ").map(Number);
    Anarray.push(arr);
    line++
}
    array(N, M,  Anarray);
    
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

