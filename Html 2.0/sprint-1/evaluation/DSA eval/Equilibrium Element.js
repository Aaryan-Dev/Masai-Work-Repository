// Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.


function equilibriumElement(N, arr) {

    let count = 0
    for (let what = 1; what < arr.length; what++) {
        let sum1 = 0
        let sum2 = 0
        count++
        for (let i = 0; i < what - 1; i++) {
            sum1 = sum1 + arr[i];
        }

        for (let j = what; j < arr.length; j++) {
            sum2 = sum2 + arr[j];

        }
        // console.log(sum1);
        // console.log(sum2);

        if (sum1 == sum2) {
            console.log(what);
            break;
        }
    }
    if (count == arr.length - 1) {
        console.log(-1);
    }
}
