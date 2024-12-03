//store the products array in localstorage as "data"

document.querySelector("#product_form").addEventListener("submit", func)


function Construct(b, n, p, i) {

    this.brand = b;
    this.name = n;
    this.price = p;
    this.image = i;

}


let data = JSON.parse(localStorage.getItem("data")) || []

function func(event) {

    event.preventDefault()

    let Brand = document.querySelector("#product_brand").Value;

    let Name = document.querySelector("#product_name").value;

    let Price = document.querySelector("#product_price").value;

    let Image = document.querySelector("#product_image").value;

    let dat = new Construct(Brand, Name, Price, Image)

    data.push(dat);

    localStorage.setItem("data", JSON.stringify(data));
}