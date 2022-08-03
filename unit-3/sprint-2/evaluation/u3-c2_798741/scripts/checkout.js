
document.querySelector("#form").addEventListener("submit", func)


function func(event) {

    event.preventDefault();
    setTimeout(function () {
        alert("Your order is confirmed ")
    }, 0000);

    setTimeout(function () {
        alert("Your order is being Packed")
    }, 3000);

    // clearTimeout(id);

    setTimeout(function () {
        alert("Your order is in transit")
    }, 8000);


    setTimeout(function () {
        alert("Your order is out for delivery")
    }, 10000);


    setTimeout(function () {
        alert("Order delivered")
    }, 12000);

}