// All the Code for All Students Page Goes Here

let arr1 = JSON.parse(localStorage.getItem("admission"));


function doit() {

    let selec = document.querySelector("#filter").value;

    if (selec == "all") {
        document.querySelector("tbody").innerHTML = "";
        fil(arr1);
    } else if (selec === "Web-Development") {
        arr2 = arr1.filter(function (elem) {
            return elem.course == "Web-Development"
        })
        document.querySelector("tbody").innerHTML = "";
        fil(arr2);
    } else if (selec === "Android-Development") {
        arr2 = arr1.filter(function (elem) {
            return elem.course === "Android-Development"
        })
        document.querySelector("tbody").innerHTML = "";
        fil(arr2);
    } else if (selec === "Data-Analitics") {
        arr2 = arr1.filter(function (elem) {
            return elem.course == "Data-Analitics"
        })
        document.querySelector("tbody").innerHTML = "";
        fil(arr2);
    }

}


fil(arr1);
function fil(arr1) {
    arr1.forEach(function (elem, index) {

        let tr = document.createElement("tr")
        document.querySelector("tbody").append(tr)

        let ntd = document.createElement("td")
        ntd.innerText = elem.name;

        let etd = document.createElement("td")
        etd.innerText = elem.email;

        let ctd = document.createElement("td")
        ctd.innerText = elem.course;

        let gtd = document.createElement("td")
        gtd.innerText = elem.gender;

        let ptd = document.createElement("td")
        ptd.innerText = elem.phone;

        let atd = document.createElement("td")
        atd.innerText = "Accept"
        atd.style.color = "green"
        atd.addEventListener("click", function (event) {
            acc(event, index);
        })

        let rtd = document.createElement("td")
        rtd.innerText = "Reject"
        rtd.style.color = "red"
        rtd.addEventListener("click", function (event) {
            rej(event, index);
        })
        tr.append(ntd, etd, ctd, gtd, ptd, atd, rtd);

    })
}


let arr2 = JSON.parse(localStorage.getItem("admission-accepted")) || []

function acc(event, index) {

    let obj1 = {
        name: event.path[1].childNodes[0].innerText,
        email: event.path[1].childNodes[1].innerText,
        course: event.path[1].childNodes[2].innerText,
        gender: event.path[1].childNodes[3].innerText,
        phone: event.path[1].childNodes[4].innerText
    }
    arr2.push(obj1);
    localStorage.setItem("admission-accepted", JSON.stringify(arr2));

    remove(index);
}


let arr3 = JSON.parse(localStorage.getItem("admission-rejected")) || []

function rej(event, index) {
    let obj2 = {
        name: event.path[1].childNodes[0].innerText,
        email: event.path[1].childNodes[1].innerText,
        course: event.path[1].childNodes[2].innerText,
        gender: event.path[1].childNodes[3].innerText,
        phone: event.path[1].childNodes[4].innerText
    }
    arr3.push(obj2);
    localStorage.setItem("admission-rejected", JSON.stringify(arr3));


    remove(index);
}



function remove(index) {
    arr1.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(arr1));
    window.location.reload();
}
