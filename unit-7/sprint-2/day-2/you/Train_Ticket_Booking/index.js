let registered_data = JSON.parse(localStorage.getItem("registered")) || [];

let to_station = null;
function to() {
  to_station = document.getElementById("to_station").value;
  // console.log(to_station);
}

let from_station = null;
function from() {
  from_station = document.querySelector("#from_station").value;
  // console.log(from_station);
}

let seat = null;
function book_seat() {
  seat = document.querySelector("#seat").value;
  // console.log(seat);
}

function validate(event) {
  window.event.preventDefault();

  let name = document.querySelector("#name").value;

  let date = document.querySelector("#date").value;

  let finalname = name.split(" ");
  // *****
  let name_it = finalname.join("");
  name_value = name_it.split("").length;

  // console.log(name_value);

  let get_id = document.querySelector("#id").value;

  // *****
  let value = true;

  if (registered_data !== null) {
    for (let i = 0; i < registered_data.length; i++) {
      if (get_id === registered_data[i].id) {
        value = false;
        break;
      } else {
        value = true;
      }
    }
  }
  // *****
  let get_age = document.querySelector("#age").value;

  if (to_station == from_station) {
    alert("From stastion and To station must be diffrent");
  } else if (get_id == "") {
    alert("Enter Id");
  } else if (name_value < 4) {
    alert("Name must be atleast 4 characters");
    // console.log(name_value);
  } else if (value == false) {
    alert("Id must be unique");
  } else if (get_age < 18 || get_age > 40) {
    alert("Age must be between 18 to 40");
  } else {
    let object = {
      id: get_id,
      name: name,
      age: get_age,
      from_station: from_station,
      to_station: to_station,
      date: date,
      seat_type: seat,
    };
    console.log(object);
    registered_data.push(object);
    localStorage.setItem("registered", JSON.stringify(registered_data));
    alert("Registered");
  }
}
