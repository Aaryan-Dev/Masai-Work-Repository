// 2 players ram and shyam are playing a game where in they both stand opposite each other and and there are n boxes between them.

// Each box contains some number of stones in it. They can move in these boxes only in one direction, i.e. ram can move only towards shyam and shyam only towards ram, also they cannot cross each other.

// As and when they step foot in a box they collect all the stones in their bag and then they can decide whether to move forward or not.

// The task is that at the end of the game the total number of stones in both the bags should be same. They cannot cross each other and cannot stand in the same box as well.

// Find the maximum no of stones each can collect so that they both have same number of stones after covering x1 and x2 boxes respectively (x1+x2<=n).

// If they cannot have equal number of stones then output 0. If there exists some number of stones they can collect so that they have equal stone then they are said to win the game.

// Note : You have to take the input yourself


function it(N, arr){
       
       
    let left = 0
    let right = arr.length-1
    let sum = arr[left] 
    let sum1 = arr[right]
    
    
   let arrA = [];
    
   while (left<right){
        if(sum===sum1){
           arrA.push(sum)
            
         //   break;
        }   else if(sum>sum1){
            sum1 = sum1 + arr[right-1]
            right--
        }else{
            sum = sum + arr[left+1]
            left++
        
    }
    }
        
         if(arrA.length===0){
             console.log(0)
         }else{
             
             let max = -Infinity; 
         for(j=0; j<arrA.length; j++){
             
             if(max<arrA[j]){
                 max = arrA[j]
             }
         }
             console.log(max);
             
             
         }
         
 }
 
 function runProgram(input) {
     input = input.trim().split("\n")
     let T = +input[0];
     let line = 1;
     
     for(i=0; i<T; i++){
         let N = +input[line]
         line++
         let arr = input[line].trim().split(" ").map(Number);
         line++
         it(N, arr);
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