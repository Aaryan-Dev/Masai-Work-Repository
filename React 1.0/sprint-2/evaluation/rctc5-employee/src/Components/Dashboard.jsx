import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

let Datas = [];
for (let i = 1; i < 8; i++) {
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${i}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      Datas.push(...res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

console.log(Datas);

export const Dashboard = () => {
  const [data, setData] = useState(Datas);

  const [top, setTop] = useState(true);

  const show = () => {
    setTop(!top);
    if (top !== true) {
      console.log("top");
      Datas.sort(function (a, b) {
        if (a.salary < b.salary) {
          return 1;
        } else if (a.salary > b.salary) {
          return -1;
        } else {
          return 0;
        }
      });
      // console.log(Datas);

      let top = [];
      for (let j = 0; j < 10; j++) {
        top.push(Datas[j]);
      }
      setData(top);
    } else {
      console.log("bottom");

      Datas.sort(function (a, b) {
        if (a.salary > b.salary) {
          return 1;
        } else if (a.salary < b.salary) {
          return -1;
        } else {
          return 0;
        }
      });

      let bottom = [];
      for (let j = 0; j < 10; j++) {
        bottom.push(Datas[j]);
      }
      setData(bottom);
    }
  };

  useEffect(() => {
    Datas.sort(function (a, b) {
      if (a.salary < b.salary) {
        return 1;
      } else if (a.salary > b.salary) {
        return -1;
      } else {
        return 0;
      }
    });
    // console.log(Datas);
    let toop = [];
    for (let j = 0; j < 10; j++) {
      toop.push(Datas[j]);
    }
    // setData(toop);
  }, []);

  console.log(data);

  return (
    <div>
      <button onClick={show} data-testid="sorting-btn">
        {top === true ? "Bottom 10 employees" : "Top 10 Employees"}
      </button>

      <div data-testid="employee-data">
        {top &&
          data.map((el) => (
            <>
              <EmployeeName data={el.name} />
              <EmployeeSalary data={el.salary} />
            </>
          ))}

        {!top &&
          data.map((el) => (
            <>
              <EmployeeName data={el.name} />
              <EmployeeSalary data={el.salary} />
            </>
          ))}
      </div>
    </div>
  );
};
