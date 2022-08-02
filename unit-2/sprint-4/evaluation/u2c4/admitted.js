// All the Code for the Admitted page goes here

let arr4 = JSON.parse(localStorage.getItem("admission-accepted"))

arr4.forEach(function (elem) {

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

    tr.append(ntd, etd, ctd, gtd, ptd);


})