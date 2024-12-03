// Given an array of N bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

function ProductOfArray(n, arr) {

    let left = 0
    let right = arr.length
    let mul = 1;
    let count = 0
    while (left < right) {

        if (left !== count) {
            mul = mul * arr[left]
        }
        left++

        count++

    }
    console.log(mul);

}