



document.querySelector("#form").addEventListener("submit", getIt);

let getArr = JSON.parse(localStorage.getItem("ojData")) || [];

function getIt(event) {
    // event.preventDefault();

    let obj = {
        questionT: document.querySelector("#title").value,
        questionL: document.querySelector("#link").value,
        questionLev: document.querySelector("#difficulty").value,
    }

    getArr.push(obj);
    document.querySelector("tbody").innerHTML = "";

    localStorage.setItem("ojData", JSON.stringify(getArr));

    display(getArr);



}




function display(getArr) {
    var value = true;
    getArr.forEach(function (elem) {


        let trIn = document.createElement("tr");
        document.querySelector("tbody").append(trIn);

        if (document.querySelector("#title").value != "" && document.querySelector("#link").value !== "" && document.querySelector("#difficulty").value !== "") {



            document.querySelector("h4").innerText = "Successful"
            document.querySelector("h4").style.backgroundColor = "#14532d"





            // document.querySelector("h4").remove();

            // if (elem.questionT != "" && elem.questionL !== "" && elem.questionLev !== "") {
            //     let thTi = document.createElement("td");
            //     thTi.innerText = elem.questionT

            //     let thLi = document.createElement("td");
            //     thLi.innerText = elem.questionL

            //     let thDi = document.createElement("td");
            //     thDi.innerText = elem.questionLev

            //     let thRr = document.createElement("td");
            //     if (elem.questionLev == "Easy") {
            //         thRr.innerText = "NO"
            //         thRr.style.color = "red"
            //     } else {
            //         thRr.innerText = "YES"
            //         thRr.style.color = "green"
            //     }

            //     trIn.append(thTi, thLi, thDi, thRr);
            // }



        }
        else {
            value = false;
        }
    })
    if (value == false) {
        alert("Fill all informations")
    }

}



document.querySelector("#but").addEventListener("click", dis)
document.querySelector("#but").innerText = "See " + getArr.length + " Question(s)"

function dis() {

    document.querySelector("#but").remove();

    firstDisplay(getArr);

    function firstDisplay(getArr) {
        // var value = true;
        getArr.forEach(function (elem) {

            let trIn = document.createElement("tr");
            document.querySelector("tbody").append(trIn);

            // if (document.querySelector("#title").value != "" && document.querySelector("#link").value !== "" && document.querySelector("#difficulty").value !== "") {


            if (elem.questionT != "" && elem.questionL !== "" && elem.questionLev !== "") {
                let thTi = document.createElement("td");
                thTi.innerText = elem.questionT

                let thLi = document.createElement("td");
                thLi.innerText = elem.questionL

                let thDi = document.createElement("td");
                thDi.innerText = elem.questionLev

                let thRr = document.createElement("td");
                if (elem.questionLev == "Easy") {
                    thRr.innerText = "NO"
                    thRr.style.color = "red"
                } else {
                    thRr.innerText = "YES"
                    thRr.style.color = "green"
                }

                trIn.append(thTi, thLi, thDi, thRr);
            }

        })


    }

}

