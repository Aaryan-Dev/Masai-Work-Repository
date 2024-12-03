
let data = JSON.parse(localStorage.getItem("data")) || []


data.forEach(function (elem, index) {
    console.log(index);

    let div = document.createElement("div");
    document.querySelector("#products_data").append(div);

    let brand = document.createElement("h2")
    brand.innerText = elem.brand

    let name = document.createElement("h4")
    name.innerText = elem.name

    let price = document.createElement("h3")
    price.innerText = elem.price


    let image = document.createElement("img");
    image.setAttribute("src", elem.image)

    let but = document.createElement("button")
    but.innerText = "Remove Product";
    but.addEventListener("click", function () {
        remo(index)
    })

    div.append(brand, name, price, image, but);

})

function remo(index) {

    data.splice(index, 1)

    localStorage.setItem("data", JSON.stringify(data));

    window.location.reload();
}



