// Given an integer n, we have n strings of length 4. Now we have to remove all those strings which is an anagram of previously appeared string.

// Print the final number of strings left and the strings after the required execution. See the sample testcase for I/O clarifications.

// Note -The final vector of strings is sorted.

function map(T, Arr, Arr1){
    
    // console.log(T, Arr, Arr1);
    
    // Arr.sort(function(a,b){
    //     if(a>b){
    //         return 1
    //     }if(a<b){
    //         return -1
    //     }
    //         return 0
    // });
    let fin = []
     let obj = {};
    for(let i=0; i<T; i++){
        let key = Arr[i];
        if(obj[key]===undefined){
            fin.push(i);
            obj[key]=1;
        }else{
            
            obj[key]++;
        }
    }
    // console.log(obj);   
    // console.log(fin);   
   
           let now = []
        for(let k=0; k<fin.length; k++){
            now.push(Arr1[fin[k]]);
        }
              now.sort(function(a,b){
        if(a>b){
            return 1
        }if(a<b){
            return -1
        }
            return 0
    });
        // console.log(now);
        console.log(now.length);
        
        for(let j=0; j<now.length; j++){
            console.log(now[j]);
        }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;
    
    let Arr = []
    let Arr1 = []
    for(let t = 0; t<T;t++ ){
        
        let arr = input[line].trim().split("");
        Arr1.push(arr.join(""))
        arr.sort(function(a,b){
        if(a>b){
            return 1
        }if(a<b){
            return -1
        }
            return 0
    });
        Arr.push(arr.join(""))
        line++
    }
        map(T, Arr, Arr1)
        
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