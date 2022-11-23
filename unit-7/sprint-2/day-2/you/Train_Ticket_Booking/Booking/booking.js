let booked = JSON.parse(localStorage.getItem("booked")) || [];

// age: "34";
// from_station: "Hyderabad";
// id: "3";
// name: "343434";
// seat_type: "Sleeper Class";
// to_station: "Pune";

display(booked);

function display(booked) {
  booked.forEach(function (el, index) {
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

    firRow.append(id, name, age, date, from_station, to_station, seat_type);
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
  display(booked);
}

function filter_seat() {
  const way = document.querySelector("#filter_v").value;

  let filter_by_vaccine = booked.filter((el) => el.seat_type === way);
  document.querySelector("tbody").innerText = "";
  display(filter_by_vaccine);

  // console.log(filter_by_vaccine);
}
function sort_age() {
  const way = document.querySelector("#sort").value;
  if (way == "asc") {
    let asc_sort = booked.sort(function (a, b) {
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
    let desc_sort = booked.sort(function (a, b) {
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
    let asc_sort = booked.sort(function (a, b) {
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
    let desc_sort = booked.sort(function (a, b) {
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
