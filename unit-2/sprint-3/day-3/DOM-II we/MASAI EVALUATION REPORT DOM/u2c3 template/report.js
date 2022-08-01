// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", submitIt);

function submitIt(event){
    
    event.preventDefault();
    
    let dataRow = document.createElement("tr")
    
    let image = document.createElement("td")
    image.innerImage = document.querySelector("#image").value;
    
    let name = document.createElement("td")
    name.innerText= document.querySelector("#name").value
    
    let batch = document.createElement("td")
    batch.innerText=document.querySelector("#batch").value
    
    let DSA = document.createElement("td")
    DSA.innerText=document.querySelector("#dsa").value
    
    let skill = document.createElement("td")
    skill.innerText=document.querySelector("#cs").value
    
    let coding = document.createElement("td")
    coding.innerText=document.querySelector("#coding").value
    
    let percentage = document.createElement("td")
   let per= (Number(document.querySelector("#dsa").value) + Number(document.querySelector("#coding").value)+ Number(document.querySelector("#cs").value)) 

    percentage.innerText = ((Number(per)/(30))*100).toFixed(2);
    
    
    let status = document.createElement("td")
    if(percentage.innerText>=50){
        status.innerText= "Regular"
        status.style.backgroundColor = "green"
    }else{
        status.innerText= "Async"
        status.style.backgroundColor = "yellow"

    }

    
    let delet = document.createElement("td")
    delet.innerText = "delete"
    delet.style.backgroundColor= "red"
    delet.addEventListener("click", del)
    function del(event){


        event.target.parentNode.remove()

    }
    
    dataRow.append(image, name, batch, DSA, skill, coding, percentage, status, delet);
    document.querySelector("tbody").append(dataRow);
}

console.log(document);


