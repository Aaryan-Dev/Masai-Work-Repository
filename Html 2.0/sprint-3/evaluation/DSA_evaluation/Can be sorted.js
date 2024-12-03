// Given an array of distinct n integers. Check whether reversing one sub-array make the array sorted or not.

// If the array is already sorted or by reversing a subarray once make it sorted, print “YES”, else print “NO”.


function take(N, arr){
    
    let Arr = [];
    
    for(let i=0; i<N-1; i++){
        
    let count = 0
    
    if(count==1){
                
             count= 0
                
            if(arr[i]<=arr[i+1]){
            count++
            Arr.push(count);
             }else{
            Arr.push(count);
        }
                
            }
    
        if(arr[i]<=arr[i+1]){
                
            Arr.push(count);
        }else{
            count++
            Arr.push(count);
            // break;
        }
            
    }
    let count2 = 0
    for(let j=0; j<Arr.length-1; j++){
        if(Arr[j]!=Arr[j+1]){
            count2++
        }
    }
    
    if(arr.length==0){
        console.log("NO");
        
    }
    else{
    if(count2 === 1){
        console.log("YES");
    }else{
        console.log("NO");
    }
    }
        
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    take(N , arr)
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