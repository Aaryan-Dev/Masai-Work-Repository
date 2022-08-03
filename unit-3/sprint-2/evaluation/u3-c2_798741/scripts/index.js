

const url = "https://grocery-masai.herokuapp.com/items";




fetch(url).then(function (res) {
    return res.json();
})
    .then(function (res) {
        let Data = (res.data);
        console.log(Data);
        appen(Data)
    })
    .catch(function (err) { })


let arr = JSON.parse(localStorage.getItem("cart_items")) || [];

function appen(Data) {

    Data.forEach(function (elem) {

        let dvv = document.createElement("div");
        document.querySelector("#groceries").append(dvv)
        dvv.setAttribute("class", "item")

        let im = document.createElement("img");
        im.src = elem.image

        let nam = document.createElement("h3");
        nam.innerText = elem.name

        let pric = document.createElement("h2");
        pric.innerText = elem.price


        let button = document.createElement("Button");
        button.innerText = "Add To Cart"
        button.addEventListener("click", add)
        button.setAttribute("class", "add_to_cart")


        dvv.append(im, nam, pric, button);




        function add() {

            let obj = {
                nam: elem.name,
                img: elem.image,
                price: elem.price

            }

            arr.push(obj);

            console.log(arr)

            let sum = 0
            arr.forEach(function (elem) {
                sum = sum + elem.price
            })
            // console.log(sum)



            if (sum <= 700) {
                document.querySelector("#wallet").innerText = 700 - sum
                localStorage.setItem("wall", JSON.stringify(700 - sum))

                localStorage.setItem("cart_items", JSON.stringify(arr));



            } else {
                alert("Insufficient balance")
            }

        }
    })

    let mone = JSON.parse(localStorage.getItem("wall")) || 700
    document.querySelector("#wallet").innerText = mone

    console.log(mone)





}



