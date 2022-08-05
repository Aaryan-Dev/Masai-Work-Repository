// There is a long queue of people in front of ATMs. Due to withdrawal limit per person per day, people come in groups to withdraw money.

// Groups come one by one and line up behind the already present queue. The groups have a strange way of arranging themselves. In a particular group, the group members arrange themselves in increasing order of their height(not necessarily strictly increasing). Effectively, all people who have lined up in increasing order of height form one group

// Find the minimum number of groups that can be observed in the queue?

function runProgram(input) {
    input = input.trim().split("\n");
    
    let N = input[0];
    let arr = input[1].trim().split(" ").map(Number);

//   console.log(arr); 
  
  let count = 0
  for(let i=0; i<arr.length; i++){
      if(arr[i]>arr[i+1]){
          count++
      }
  }
  console.log(count+1);
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