
    //enter key fuctionality
    let input = document.getElementById("query");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      search();
    }
  });
    
    
    function search() {
        let input = document.querySelector("#query").value;
        const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${input}`

    fetch(url).then(function (res) {
        return res.json();
    })
    .then (function (res){
        let data = (res.hotels);  
        document.querySelector("#hotels_list").innerHTML = "";
        append(data);
        console.log(data);
    })
        .catch(function (err) {
            console.log(err);
    })
}


let append = (data) => {
    
    data.forEach((elem) => {
        
        let div = document.createElement("div");
        document.querySelector("#hotels_list").append(div);
          div.setAttribute("id", "hotel")

        let img = document.createElement("img");
        img.src = elem.Images.two
          
        let title = document.createElement("h4");
        title.innerText =  elem.Title
        
        let price = document.createElement("h5");
        price.innerText =  elem.Price

        let rating = document.createElement("h5");
        rating.innerText =   elem.Rating

        let acStat = document.createElement("h6");
        
        if (elem.Ac) {
            acStat.innerText = `Ac is Available`;
            acStat.style.color = "green"
        } else {
            acStat.innerText = `Ac NOT available`
            acStat.style.color = "red"
        }
            

        let but = document.createElement("button");
        but.innerText = "Book Now";
        but.setAttribute("class", "book");
        but.addEventListener("click", function () {
            book(elem)
        })
        
        div.append(img, title, price, rating, acStat, but);

    })
}

    
    
    
    


function price() {
   
    let value = document.querySelector("#byPrice").value;
    if (value == "lh") {
        
        document.querySelector("#hotels_list").innerHTML = "";

         let input = document.querySelector("#query").value;
        const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${input}`
        
    fetch(url).then(function (res) {
        return res.json();
    })
        .then(function (res) {
        
            let data = (res.hotels);
            console.log(data);
        data.sort(function (a, b) {
           return a.Price - b.Price
        })
           
        append(data);
    })
      
        .catch(function (err) {
            console.log(err);
    })


        
 
    } else if (value == "hl") {

         document.querySelector("#hotels_list").innerHTML = "";

         let input = document.querySelector("#query").value;
        const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${input}`
        
    fetch(url).then(function (res) {
        return res.json();
    })
        .then(function (res) {
        
            let data = (res.hotels);
            console.log(data);
        data.sort(function (a, b) {
           return b.Price - a.Price
        })
           
        append(data);
    })
      
        .catch(function (err) {
            console.log(err);
    })
        
        
    }


}

let ac = () => {
    let value = document.querySelector("#byAc").value;



      if (value == "ac") {
        
        document.querySelector("#hotels_list").innerHTML = "";

         let input = document.querySelector("#query").value;
        const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${input}`
        
    fetch(url).then(function (res) {
        return res.json();
    })
        .then(function (res) {
        
            let data = (res.hotels);
            console.log(data);
        data = data.filter(function (elem) {
            return elem.Ac == true;
        })
           
        append(data);
    })
      
        .catch(function (err) {
            console.log(err);
    })


        
 
    } else if (value == "nac") {

         document.querySelector("#hotels_list").innerHTML = "";

         let input = document.querySelector("#query").value;
        const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${input}`
        
    fetch(url).then(function (res) {
        return res.json();
    })
        .then(function (res) {
        
            let data = (res.hotels);
            console.log(data);
      data = data.filter(function (elem) {
          return elem.Ac == false;
        })
           
        append(data);
    })
      
        .catch(function (err) {
            console.log(err);
    })
        
        
    }

    
}
    
let hotel =JSON.parse(localStorage.getItem("hotel"))  || []

let book = (elem) => {

    let Arr =  JSON.parse(localStorage.getItem("users"))  || [];

    if (Arr.length === 0) {
        alert("Log In to continue!");
        window.location.href = "login.html"
    } else {
        
        window.location.href = "checkout.html" ;

    }

    hotel.push(elem);

    localStorage.setItem("hotel", JSON.stringify(hotel))

   
}