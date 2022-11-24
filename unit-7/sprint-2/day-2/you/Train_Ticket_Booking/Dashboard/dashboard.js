let registered_data = JSON.parse(localStorage.getItem("registered")) || [];
let vaccinated = JSON.parse(localStorage.getItem("vaccinated")) || [];

// age: "34";
// from_station: "Hyderabad";
// id: "3";
// name: "343434";
// seat_type: "Sleeper Class";
// to_station: "Pune";

display(registered_data);

function display(registered_data) {
  registered_data.forEach(function (el, index) {
    let firRow = document.createElement("tr");
    document.getElementById("tbody").append(firRow);

    let id = document.createElement("td");
    id.innerText = el.id;

    let name = document.createElement("td");
    name.innerText = el.name;
    let age = document.createElement("td");
    age.innerText = el.age;
    let date = document.createElement("td");
    date.innerText = el.date;
    let from_station = document.createElement("td");
    from_station.innerText = el.from_station;
    let to_station = document.createElement("td");
    to_station.innerText = el.to_station;
    let seat_type = document.createElement("td");
    seat_type.innerText = el.seat_type;

    let Reject = document.createElement("td");
    Reject.innerText = "Reject";
    Reject.style.background = "red";
    Reject.style.color = "white";
    Reject.setAttribute("class", "pointer");
    Reject.addEventListener("click", () => deleteIt(index));

    let Confirm = document.createElement("td");
    Confirm.innerText = "Confirm";
    Confirm.style.color = "white";
    Confirm.style.background = "green";
    Confirm.addEventListener("click", () => vaccinateIt(index));
    Confirm.setAttribute("class", "pointer");

    let otp = document.createElement("td");
    otp.setAttribute("id", "otp_input");

    firRow.append(
      id,
      name,
      age,
      date,
      from_station,
      to_station,
      seat_type,
      Reject,
      Confirm,
      otp
    );
  });
}
// **************************************************************

function reset() {
  document.querySelector("tbody").innerText = "";
  document.querySelector("#filter_v").value = "";
  document.querySelector("#filter_v").focus();
  document.querySelector("#sort").value = "";
  document.querySelector("#sort").focus();
  document.querySelector("#sort_p").value = "";
  document.querySelector("#sort_p").focus();
  display(registered_data);
}

function filter_seat() {
  const way = document.querySelector("#filter_v").value;

  let filter_by_vaccine = registered_data.filter((el) => el.seat_type === way);
  document.querySelector("tbody").innerText = "";
  display(filter_by_vaccine);

  // console.log(filter_by_vaccine);
}
function sort_age() {
  const way = document.querySelector("#sort").value;
  if (way == "asc") {
    let asc_sort = registered_data.sort(function (a, b) {
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
    let desc_sort = registered_data.sort(function (a, b) {
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
function sort_date() {
  const way = document.querySelector("#sort_p").value;
  if (way == "asc") {
    let asc_sort = registered_data.sort(function (a, b) {
      if (a.date < b.date) {
        return 1;
      } else if (a.date > b.date) {
        return -1;
      } else {
        return 0;
      }
    });
    document.querySelector("tbody").innerText = "";
    display(asc_sort);
  } else {
    let desc_sort = registered_data.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      } else if (a.date < b.date) {
        return -1;
      } else {
        return 0;
      }
    });
    document.querySelector("tbody").innerText = "";
    display(desc_sort);
  }
}
// ***************************************************************************
function deleteIt(index) {
  // alert(index);
  registered_data.splice(index, 1);

  localStorage.setItem("registered", JSON.stringify(registered_data));

  location.reload();
}

var storeed_otp = null;

function vaccinateIt(index) {
  // let otp = String((Math.random() * 10000).toFixed(0));
  let what_otp = String(Math.random());

  let one = what_otp.split(".")[1].split("")[0];
  let two = what_otp.split(".")[1].split("")[1];
  let three = what_otp.split(".")[1].split("")[2];
  let four = what_otp.split(".")[1].split("")[3];

  let otp = one + two + three + four;
  // console.log(otp);
  storeed_otp = otp;

  let otpbox = document.querySelectorAll("#otp_input");

  for (let i = 0; i < otpbox.length; i++) {
    otpbox[i].style.background = "white";
    otpbox[i].innerText = "";
  }

  document.querySelectorAll("#otp_input")[index].innerText = otp;
  document.querySelectorAll("#otp_input")[index].style.color = "white";
  document.querySelectorAll("#otp_input")[index].style.background = "black";

  setTimeout(() => {
    validate_otp(index, storeed_otp);
  }, 200);
}

const validate_otp = (index, storeed_otp) => {
  let get_otp = prompt("Enter the OTP");
  if (get_otp === storeed_otp) {
    alert(
      registered_data[index].name + " added to waiting list  - Immediately"
    );
    setTimeout(() => {
      alert(
        "Booking ticket from " +
          registered_data[index].from_station +
          " to " +
          registered_data[index].to_station +
          " - After 5 seconds"
      );
    }, 5000);
    setTimeout(() => {
      alert(
        "Ticket booked for " +
          registered_data[index].date +
          " - After 10 seconds"
      );
      vaccinated.push(registered_data[index]);
      localStorage.setItem("booked", JSON.stringify(vaccinated));
      registered_data.splice(index, 1);
      localStorage.setItem("registered", JSON.stringify(registered_data));
      location.reload();
    }, 10000);
  } else {
    alert("OTP is wrong");
  }
};
