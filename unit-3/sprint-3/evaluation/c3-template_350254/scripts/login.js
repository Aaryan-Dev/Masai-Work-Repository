let login = () => {
    
    let Arr = JSON.parse(localStorage.getItem("users")) || [];
    
     let e = document.querySelector("#email").value;
     let p = document.querySelector("#password").value;

    let count = 0;
    let count1 = 0;
    let count2 = 0;
    

     Arr.forEach((elem) => {
        if (elem.email==e && elem.password ==p ) {
                       count++
        } else if(elem.email==e && elem.password !==p ){
                  count1++
        } else {
            count2++
        }

     })
    if (count>0) {
        alert("Login successful!")
        
        window.location.href = "./checkout.html";

    } else if(count1>0) {
        alert("Wrong credentials");
    } else if (count2>0 || Arr.length==0 ) {
        alert(` User doesn't exist, Sign Up `);
        window.location.href = "./signup.html";

    }


}