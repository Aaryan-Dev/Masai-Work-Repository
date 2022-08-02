// Given the current day, and a number N, find what day will it be after N days.

// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}


function dayOfTheWeek(day, N) {

    let obj = {

        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7,

    }


    let num = obj[day] + N

    //   console.log(num%7);

    if (num % 7 === 0) {
        console.log("Sunday");
    } else {
        for (let k in obj) {
            if (obj[k] == num % 7) {
                console.log(k);
            }
        }
    }

}