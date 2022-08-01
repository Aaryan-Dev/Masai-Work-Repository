// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


function solve(N, arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        min = i;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[min] > arr[j]) {
                min = j
            }

        }
        swap(arr, min, i);
    }

    function swap(arr, min, i) {
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp
    }

    console.log(arr.join(" "));

}