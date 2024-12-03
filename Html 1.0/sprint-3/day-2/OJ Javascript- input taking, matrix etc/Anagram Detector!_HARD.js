// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, the word anagram can be rearranged into nag a ram.

// Given 2 phrases, write a program that detects if both are anagrams of each other.

// If both are anagrams, print "True"

// Else print "False"


function array(pha, pha1){
    
    let obj =  {};
    for(let i =0; i<pha.length; i++){
        let key = pha[i];
         if(key!==" "){   
        if(obj[key] === undefined){
            obj[key] = 1;
        }else{
            obj[key] = obj[key] + 1;
        }
    }
    }
        
        
     obj1 =  {};
    for(let j =0; j<pha1.length; j++){
        let key1 = pha1[j];
         
    if(key1!==" "){     
        if(obj1[key1] === undefined){
            obj1[key1] = 1;
        }else{
            obj1[key1] = obj1[key1] + 1;
        }
    }    
    }
    
    
        count= 0
        let arr = [];
    for(let l in obj){
        arr.push(l);
        for(let m in obj1){
            if(l==m && obj[l]==obj1[m]){
                count++
            }
        }
    }
    
    if(count==arr.length){
        console.log("True");
    }else{
        console.log("False");
    }
        
            
        
        
    
    
     
}
function runProgram(input) {
    input = input.trim().split("\n");
    let pha = input[0];
    let pha1 = input[1];
    array(pha, pha1);
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