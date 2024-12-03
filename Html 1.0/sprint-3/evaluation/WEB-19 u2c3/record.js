// fill in javascript code here


document.querySelector("form").addEventListener("submit", func);


function func(event) {
    event.preventDefault();

    let firRow = document.createElement("tr");
    document.querySelector("tbody").append(firRow);


    let tname = document.createElement("td")
     tname.innerText = document.querySelector("#name").value;
     
     let temp = document.createElement("td")
     temp.innerText = document.querySelector("#employeeID").value;
     
     
     let tdep = document.createElement("td")
     tdep.innerText = document.querySelector("#department").value;


    let tex = document.createElement("td")
    tex.innerText = document.querySelector("#exp").value;

    let tema = document.createElement("td")
    tema.innerText = document.querySelector("#email").value;

    let tmobile = document.createElement("td")
    tmobile.innerText = document.querySelector("#mbl").value;

    let trole = document.createElement("td")

    if(Number(document.querySelector("#exp").value)>5){
        trole.innerText = "Senior";
    }
    else if(Number(document.querySelector("#exp").value)>=2 && Number(document.querySelector("#exp").value)<=5){
        trole.innerText = "Junior";
    }
    else if(Number(document.querySelector("#exp").value)<=1){
        trole.innerText = "Fresher";
    }

    let dele = document.createElement("td")
    dele.innerText = "Delete"
    dele.style.backgroundColor = "red"
    dele.style.padding="5px"
    dele.style.fontWeight= "900"

    dele.addEventListener("click", clear);

    function clear(event) {
      event.target.parentNode.remove();
    }


    firRow.append(tname, temp, tdep, tex, tema, tmobile, trole, dele);

}

console.log(document);