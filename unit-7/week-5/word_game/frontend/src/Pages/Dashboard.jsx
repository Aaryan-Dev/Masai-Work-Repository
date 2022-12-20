import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";

const Dashboard = () => {
  const [userData, setData] = useState([]);

  useEffect(() => {
    fetch("https://wordgame-b043.onrender.com/getuser")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.mark_data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="get">
      <table border={2}>
        <thead>
          <tr>
            <th>name</th>
            <th>score</th>
            <th>level</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((el) => (
            <tr>
              <td>{el.name}</td> <td>{el.score}</td> <td>{el.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
