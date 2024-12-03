let hotel = JSON.parse(localStorage.getItem("hotel")) || []


    hotel.forEach((elem) => {
        
        let div = document.createElement("div");
        document.querySelector("#hotel_details").append(div);
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

        
        div.append(img, title, price, rating, acStat);

    })

function book() {

    let na = document.querySelector("#user_name").value;

    setTimeout(function () {
        alert(`"${na}, Your booking is successful!"`);
    }, 5000)
    
}