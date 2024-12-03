// Given a matrix of size n by n. Traverse and print the matrix in spiral form.


function spirallyTraversingAMatrix(N, matrix){
   
    let left = 0;
    let right = N-1;
    let top = 0;
    let bottom = N-1;
    let bag = "";
    
    let count = 0;
    
    while(count<N*N){
    for(let i = left; i<=right; i++){
        bag = bag + (matrix[top][i])+ " ";
        count++
    }
    top++
    for(let j = top; j<=bottom; j++){
        bag = bag + (matrix[j][right])+ " ";
        count++
    }
    right--
    for(let k = right; k>=left ; k--){
        bag = bag + (matrix[bottom][k])+ " ";
        count++
    }
    bottom--
    for(let l = bottom; l>=top; l-- ){
       bag = bag + (matrix[l][left])+ " ";
        count++
    }
    left++
    }
    console.log(bag);
 }