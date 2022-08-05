// There is a stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack.

// The next n line contains one of the following 3 operations:

// 1 x : Push x to the top of the stack.

// 2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

// 3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

// For better understanding, read sample test case explanation


function runProgram(input) {
    
    input = input.trim().split("\n");
    
    let op = input[0];
    let line = 1;
    
        let Arr = [];
        
    for(let o=0; o<op; o++){
        let arr = input[line].trim().split(" ").map(Number);
        
        let v = arr[0];
        
        let el;
        if(v==1){
         el = arr[1];
         Arr.push(el);
        }else if(v==2){
            Arr.pop()
        }else if(v==3){
            
            if(Arr.length===0){
                console.log("Empty!")
            }else{
            
            console.log(Arr[Arr.length-1]);
        }
            
        }
        line++
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