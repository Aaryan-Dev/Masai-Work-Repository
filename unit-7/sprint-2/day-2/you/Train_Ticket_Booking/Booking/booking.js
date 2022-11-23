// let registered_data = JSON.parse(localStorage.getItem("registered")) || [];
let vaccinated = JSON.parse(localStorage.getItem("booked")) || [];

console.log(vaccinated);

display(vaccinated);

function display(vaccinated) {
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

    firRow.append(id, name, age, designation, vaccine, priortity);
  });
}

// **************************************************************

function reload() {
  document.querySelector("tbody").innerText = "";
  document.querySelector("#filter_v").value = "";
  document.querySelector("#filter_v").focus();
  document.querySelector("#sort").value = "";
  document.querySelector("#sort").focus();
  document.querySelector("#filter_p").value = "";
  document.querySelector("#filter_p").focus();
  display(vaccinated);
}

function filter_vaccine() {
  const way = document.querySelector("#filter_v").value;

  let filter_by_vaccine = vaccinated.filter((el) => el.vaccine === way);
  document.querySelector("tbody").innerText = "";
  display(filter_by_vaccine);

  console.log(filter_by_vaccine);
}
function sort_age() {
  const way = document.querySelector("#sort").value;
  if (way == "asc") {
    let asc_sort = vaccinated.sort(function (a, b) {
      if (Number(a.age) - Number(b.age) < 0) {
        return 1;
      } else if (Number(a.age) - Number(b.age) > 0) {
        return -1;
      } else {
        return 0;
      }
    });
    document.querySelector("tbody").innerText = "";
    display(asc_sort);
  } else {
    let desc_sort = vaccinated.sort(function (a, b) {
      if (Number(a.age) - Number(b.age) < 0) {
        return -1;
      } else if (Number(a.age) - Number(b.age) > 0) {
        return 1;
      } else {
        return 0;
      }
    });
    document.querySelector("tbody").innerText = "";
    display(desc_sort);
  }
}
function filter_prioroty() {
  const way = document.querySelector("#filter_p").value;

  let filter_by_Prioroity = vaccinated.filter((el) => el.priority === way);
  document.querySelector("tbody").innerText = "";
  display(filter_by_Prioroity);

  console.log(filter_by_Prioroity);
}
// ***************************************************************************

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
