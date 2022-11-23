let registered_data = JSON.parse(localStorage.getItem("registered"));

function prior() {
  let prior = document.querySelector("#prior").value;
  console.log(prior);
}

function vaccine() {
  let vaccine = document.querySelector("#vaccine").value;
  console.log(vaccine);
}

function validate(event) {
  window.event.preventDefault();

  let name = document.querySelector("#name").value;

  let finalname = name.split(" ");
  // *****
  let name_it = finalname.join("");
  name_value = name_it.split("").length;

  console.log(name_value);

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

  let emp = document.querySelector("#emp").checked;
  let stud = document.querySelector("#std").checked;
  //   let lable = document.lable;

  //   console.log(lable);

  if (emp === false && stud === false) {
    alert("Slelect Designatoin");
  } else if (get_id == "") {
    //   console.log(get_id);
    alert("Enter Id");
  } else if (name_value < 4) {
    alert("Name must be atleast 4 characters");
    console.log(name_value);
  } else if (value == false) {
    alert("Id must be unique");
  } else if (get_age < 18 || get_age > 40) {
    alert("Age must be between 18 to 40");
  } else {
    let object = {
      id: get_id,
      name: name,
      age: get_age,
      designation: emp ? "employee" : "student",
      //       priority: ,
      //   vaccine:,
    };
  }
}
