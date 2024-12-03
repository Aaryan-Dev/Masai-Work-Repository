// Sarvagaya is trapped in maze. The Masai command center sent him a string which decodes to come out from the maze. He is initially at (0, 0). String contains L, R, U, D denoting left, right, up and down. In each command he will traverse 1 unit distance in the respective direction.

// For example if he is at(2, 0) and the command is L he will go to(1, 0).


function runProgram(input) {
    let arr = input;
    
    let R =  1;
    let L = -1;
    
    let U =  1;
    let D = -1;
    
    let obj = {};
    for(let i=0; i<arr.length; i++){
        let key = arr[i];
        if(obj[key]===undefined){
            obj[key]=1;
        }else{
            obj[key]++;
        }
    }
            // console.log(obj);
        let sum1 = 0;    
        let sum2 = 0;   
    for(let o in obj){
        
        if(o=="R"){
           sum1= sum1 + obj[o];
            // console.log(sum1)
           
            
        }else if(o=="L"){
             sum1= sum1 - obj[o];
            // console.log(sum1)
            
        }else if(o=="U"){
            sum2= sum2 + obj[o];
            
        }else if(o=="D"){
            sum2= sum2 - obj[o];
            
        }
        
    }        
          console.log(sum1+" "+sum2);  
    
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