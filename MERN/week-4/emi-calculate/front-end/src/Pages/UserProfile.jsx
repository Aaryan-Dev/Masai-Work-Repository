import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../App.css";
// import { useContext } from "react";
// import { Con } from "../Context/AppContext";
// import Edit from "../Components/Edit";
// import { shallowEqual } from "react-redux";

const UserProfile = () => {
  // const param = useParams();
  // const [array, setArray] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // const navigate = useNavigate();
  // const [toggle, setToggle] = useState(false);
  // const value = useContext(Con);
  // const { logoutUser } = value;

  useEffect(() => {
    fetch("https://bmi-lw21.onrender.com/getProfile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res.bmi_data);
        console.log(res);
        setEmail(res.bmi_data[0].email);
        setName(res.bmi_data[0].username);
        // setObj(res.bmi_data);
        // for (let i = 0; i < res.length; i++) {
        //   if (Number(param.id) === res[i].id) {
        //     setObj(res[i]);
        //     // console.log(arr[i]);
        //     break;
        //   }
        // }
      });
  });

  // const deleteIt = (id) => {
  //   fetch("https://json-db.onrender.com/user/" + id, { method: "DELETE" })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       alert("Account is deleted");
  //       logoutUser();
  //     });
  // };

  // const editIt = (id) => {
  //   if (toggle) {
  //     setToggle(false);
  //   } else {
  //     setToggle(true);
  //   }
  // };

  return (
    <div id="user">
      <div>Email - {email}</div>
      <div>Name - {name}</div>
      {/* <div id="row"> */}
      {/* <div className="foll">
          {(Math.random() * 1000000).toFixed(0) + ` Followers`}
        </div> */}
      {/* <div className="foll">
          {(Math.random() * 1000).toFixed(0) + ` Following`}
        </div> */}
      {/* </div> */}
      {/* <div id="row"> */}
      {/* <div>
          <button onClick={() => editIt(obj.id)} id="edit" className="but">
            <pre>{!toggle ? "Edit Profile" : "Close"}</pre>
          </button>
        </div> */}
      {/* {toggle ? <Edit id={obj.id} /> : null} */}
      {/* <div>
          <button onClick={() => deleteIt(obj.id)} id="delete" className="but">
            <pre>Delete Account</pre>
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default UserProfile;
