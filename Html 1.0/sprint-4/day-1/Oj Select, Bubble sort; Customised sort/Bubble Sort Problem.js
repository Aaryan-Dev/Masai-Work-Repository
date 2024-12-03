// You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


function solve(N, arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    function swap(arr, j, thisJ) {

        temp = arr[thisJ];
        arr[thisJ] = arr[j]
        arr[j] = temp

    }

    console.log(arr.join(" "));

}
