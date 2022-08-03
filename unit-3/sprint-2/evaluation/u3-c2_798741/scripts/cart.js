let mone = JSON.parse(localStorage.getItem("wall")) || 700

document.querySelector("#cart_total").innerText = 700 - mone;



let Arr = JSON.parse(localStorage.getItem("cart_items")) || [];

Arr.forEach(function (elem, index) {

    let dvv = document.createElement("div");
    document.querySelector("#cart").append(dvv)
    dvv.setAttribute("classs", "item")

    let im = document.createElement("img");
    im.src = elem.img

    let nam = document.createElement("h3");
    nam.innerText = elem.nam

    let pric = document.createElement("h2");
    pric.innerText = elem.price


    let but = document.createElement("Button");
    but.innerText = "Remove"
    but.addEventListener("click", function () {
        rem(index)
    })
    but.setAttribute("class", "remove")


    dvv.append(im, nam, pric, but);

    function rem(index) {

        let update = mone + Arr[index].price
        localStorage.setItem("wall", JSON.stringify(update))

        Arr.splice(index, 1)

        localStorage.setItem("cart_items", JSON.stringify(Arr));

        window.location.reload();
    }


});
