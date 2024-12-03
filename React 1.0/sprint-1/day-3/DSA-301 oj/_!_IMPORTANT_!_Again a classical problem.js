// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets enclose a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.

// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

// Given a string, you have to comment if it is balanced or not


function take(arr){
    
    let stack = [];
    let vaule = false;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]=="("||arr[i]=="{"||arr[i]=="["){
          stack.push(arr[i]);   
        }
        
        if(arr[i]==")" && stack[stack.length-1]=="(" ){
           stack.pop();        
        }else if(arr[i]==")" && stack.length===0){
            vaule = true;
            break;
        }
        if(arr[i]=="}" && stack[stack.length-1]=="{"){
            stack.pop();
        }else if(arr[i]=="}" && stack.length===0){
            vaule = true;
            break;
        }
        
        if(arr[i]=="]" && stack[stack.length-1]=="["){
            stack.pop();
        }else if(arr[i]=="]" && stack.length===0){
            vaule = true;
            break;
        }
        
    }
    // console.log(stack);
    
    if(!vaule){
        
    if(stack.length===0){
        console.log("balanced");
    }else{
        console.log("not balanced");
    }
    }else{
        
        console.log("not balanced");
    }
    
    
}

function runProgram(input) {
    
    input = input.trim().split("\n");
    
    let T = input[0];
    let line = 1;
    for(let t=0; t<T; t++){
        let arr = input[line];
        line++
        take(arr);
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

