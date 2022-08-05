// Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Print the missing one first and then the repeated one with a space character in between them.

// Expected Auxillary Space Complexity - O(1)

function map(N, arr){
    // console.log(N, arr);
    let sum = 0
    for(let j=1; j<=N; j++){
        sum = sum + j
    }
    // console.log(sum);
    
    let obj = {};
    for(let i=0; i<N; i++){
        let key = arr[i];
        if(obj[key]===undefined){
            obj[key]=1;
        }else{
            
            obj[key]++;
        }
    }
    // console.log(obj);
 
    let bag = ""
    let sum1 = 0
    for(let k in obj){
        sum1 = sum1 + Number(k)
        if(obj[k]==2){
            bag = bag+k
        }
    }
    
    // console.log(sum1);
    
    let fin = sum-sum1;
    
    console.log(fin+" "+bag);
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    let line = 1;
    
    for(let t=0; t<T; t++){
        let N = +input[line];
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        map(N, arr)
    }
}