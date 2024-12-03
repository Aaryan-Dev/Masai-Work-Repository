// Masai is organizing a sports fest that is going to run for N days, and everyday M people are going to participate in it. Each player is having some power rating P. The person with higher value of P, wins everyday. You are given the powers of all the people participating everyday. You have to find the winner for everyday, and print their power in the form of a list. Refer the sample I/O for better understanding.



function masaiCompetition(N, M, arr) {

    let mArr = []
    //   console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        //   console.log(arr[i]);

        let max = -Infinity;
        for (let j = 0; j < arr[i].length; j++) {
            if (max < arr[i][j]) {
                max = arr[i][j]
            }
        }
        mArr.push(max);
    }
    console.log(mArr.join(" "));

}