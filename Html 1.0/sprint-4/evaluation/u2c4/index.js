// All the JS Code for the Add Students Page Goes Here
document.querySelector("#form").addEventListener("submit", func);


let arr =
    JSON.parse(localStorage.getItem("admission")) || []
function func() {

    let obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        course: document.querySelector("#course").value,
        gender: document.querySelector("#gender").value,
        phone: document.querySelector("#phone").value,
    }

    arr.push(obj);

    localStorage.setItem("admission", JSON.stringify(arr));

}