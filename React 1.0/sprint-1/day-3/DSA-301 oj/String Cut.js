// You are given a string S. Cut it into 2 equal halves and reverse it.

// So, suppose if you have a string "abcxyz" then after performing the above mentioned operation it becomes "cbazyx"

// If you have a string "abcdxyz", then after performing the above mentioned operation it becomes "cbadzyx"


function runProgram(input) {
   let arr = input;
   
   let size = arr.length;
   
   let Arr = [];
   if(size%2===0){
       
       for(let i=(size/2)-1; i>=0; i--){
           Arr.push(arr[i])
       }
       for(let j=size-1; j>(size/2)-1; j--){
           Arr.push(arr[j])   
       }
   }else{
    for(let i=((size-1)/2)-1; i>=0; i--){
           Arr.push(arr[i])
       }
       Arr.push(arr[(size-1)/2])
       for(let j=size-1; j>((size-1)/2); j--){
           Arr.push(arr[j])   
       }   
   }
       
       console.log(Arr.join(""));
       
       
   
   
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