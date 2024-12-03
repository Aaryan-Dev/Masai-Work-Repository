// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.


function take(arr){
   
         var ans = [];
         var stack = [];
         for(var i=0; i<arr.length; i++){
             while(stack.length>0 && arr[i]<=stack[stack.length-1]){
                stack.pop(); //time complexity (O)N
             }
             if(stack.length===0){
                 ans.push(-1);
             }else{
                 ans.push(stack[stack.length-1]);
             }
                 stack.push(arr[i]);
         }
     console.log(ans.join(" "));
    }

function runProgram(input) {
    input = input.trim().split("\n");
    let arr =input[1].trim().split(" ").map(Number)
    
    take(arr);
    
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

