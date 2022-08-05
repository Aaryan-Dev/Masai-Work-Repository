// Given a string of lowercase characters in range ascii[‘a’..’z’].

// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

// I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose


function runProgram(input) {
   
   let arr = input.trim().split("");
//   console.log(arr);
   
   let right = arr.length-1;
   let left = right-1;
   
   let Arr = [];
   
   while(right>=0 && left>=-1){
       if(arr[right]==arr[left]){
           arr.pop()
           arr.pop()
           right = arr.length-1
           left = right-1
       }else{
           Arr.push(arr[right]);
           arr.pop()
            right = arr.length-1
           left = right-1
       }
   }
   if(Arr.length===0){
       console.log("Empty String");
   }else{
   console.log(Arr.reverse().join(""));
       
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