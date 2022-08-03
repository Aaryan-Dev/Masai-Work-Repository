
let Arr =  JSON.parse(localStorage.getItem("users"))  || [];

let sign = () => {
    class Signup {
    
        constructor(n, e, p) {
            this.name = n;
            this.email = e;
            this.password = p;
        }
       
    }

    let n = document.querySelector("#name").value;
    let e = document.querySelector("#email").value;
    let p = document.querySelector("#password").value;

    let s1 = new Signup(n, e, p)

    Arr.push(s1);

    localStorage.setItem("users", JSON.stringify(Arr))

    alert("Signed up, now login");

    window.location.href = "login.html"

}
