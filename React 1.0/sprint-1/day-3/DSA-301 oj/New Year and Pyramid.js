// You have decided to build a pyramid of stones on this new year. The simple rule is that the top level of the pyramid must consist of 1 stone, the second level must consist of 1 + 2 = 3 stones, the third level must have 1 + 2 + 3 = 6 stones, and so on.

// Effectively, the i-th level of the pyramid contains 1 + 2 + ... + (i - 1) + i stones.

// You have got n stones and have to build a pyramid from them.

// Team Masai wants to know what is the maximum height of the pyramid that you can make using the given stones.


function runProgram(input) {
    let num = input;
    
    let sum =0;
    let Arr = [];
    for(let i=1; i<=num; i++){
        
        if(sum<num){
        sum = sum + i
        // console.log(sum);
        Arr.push(sum)
        }
    }
    // console.log(Arr);
    
    let sum2 = 1;
    let count = 0;
    let value = false
    
    for(let j=1; j<Arr.length; j++){
        
        if(num>sum2){
            // console.log(sum2)
            count++
            sum2 = sum2 + Arr[j]
        }
        if(num==sum2){
            value = true;
        }
    }
    
    if(value){
        
     console.log(count+1);
    }else{
     console.log(count);
        
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