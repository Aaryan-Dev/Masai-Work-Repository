// let registered_data = JSON.parse(localStorage.getItem("registered")) || [];
let vaccinated = JSON.parse(localStorage.getItem("vaccinated")) || [];

display();

function display() {
  vaccinated.forEach(function (el, index) {
    let firRow = document.createElement("tr");
    document.getElementById("tbody").append(firRow);

    let id = document.createElement("td");
    id.innerText = el.id;

    let name = document.createElement("td");
    name.innerText = el.name;
    let age = document.createElement("td");
    age.innerText = el.age;
    let designation = document.createElement("td");
    designation.innerText = el.designation;
    let priortity = document.createElement("td");
    priortity.innerText = el.priority;
    let vaccine = document.createElement("td");
    vaccine.innerText = el.vaccine;

    // let delet = document.createElement("td");
    // delet.innerText = "delete";
    // delet.style.background = "red";
    // delet.style.color = "white";
    // delet.addEventListener("click", () => deleteIt(index));

    // let vaccinate = document.createElement("td");
    // vaccinate.innerText = "Vaccinate";
    // vaccinate.style.color = "white";
    // vaccinate.style.background = "green";
    // vaccinate.addEventListener("click", () => vaccinateIt(index));

    // let otp = document.createElement("td");
    // let input = document.createElement("input");
    // let button = document.createElement("button");
    // button.innerText = "Enter OTP";
    // button.addEventListener("click", () => validate_otp(index));

    // input.setAttribute("id", "otp_input");

    // input.type = "number";
    // input.placeholder = "Enter the OTP";
    // otp.append(input, button);

    firRow.append(id, name, age, designation, priortity);
  });
}

// function deleteIt(index) {
//   // alert(index);
//   registered_data.splice(index, 1);

//   localStorage.setItem("registered", JSON.stringify(registered_data));

//   location.reload();
// }

// var storeed_otp = null;

// function vaccinateIt(index) {
//   let otp = (Math.random() * 10000).toFixed(0);

//   storeed_otp = otp;
//   // console.log(otp);

//   document.querySelector("#otp_input").focus();

//   storeed_otp = otp;

//   alert(otp);
// }

// const validate_otp = (index) => {
//   console.log(storeed_otp);
//   if (document.querySelector("#otp_input").value == storeed_otp) {
//     alert(registered_data[index].name + " Added to Queue");

//     setTimeout(() => {
//       alert("Vaccinating " + registered_data[index].vaccine);
//     }, 5000);

//     setTimeout(() => {
//       alert(registered_data[index].name + " Vaccinated");
//       vaccinated.push(registered_data[index]);
//       localStorage.setItem("vaccinated", JSON.stringify(registered_data));
//       registered_data.splice(index, 1);
//       localStorage.setItem("registered", JSON.stringify(registered_data));
//       location.reload();
//     }, 10000);
//   } else {
//     alert("otp is wrong");
//   }
// };
