const express = require("express");

const { UserModle } = require("./Modle/User.modle");
const { BmiModle } = require("./Modle/Bmi.modle");
const { connection } = require("./db");
require("dotenv").config();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const cors = require("cors");

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());

app.use(express.json());

const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  var decoded = jwt.verify(token, process.env.JWT_KEY);

  if (decoded) {
    console.log(decoded);
    console.log(req.body);
    req.body.userId = decoded.userId;
    console.log(req.body);
    next();
  } else {
    res.send({ msg: "Login first" });
  }
};

app.get("/", (req, res) => {
  res.send("This is Api for BMI App");
});
//signup
//login
//calculateBMI
//getCalculation
//getProfile
//logOut

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const exists = await UserModle.findOne({ email });

  if (exists) {
    res.send({ msg: "Email already exists" });
  } else {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        res.send(err);
      } else {
        const new_user = new UserModle({
          email,
          password: hash,
        });

        try {
          await new_user.save();
        } catch (err) {
          console.log(err);
        }

        res.send({ msg: "Signup Succsessful" });
      }
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user_data = await UserModle.findOne({ email });
  const hashed_password = user_data.password;
  const user_id = user_data._id;

  bcrypt.compare(password, hashed_password, function (err, result) {
    if (result) {
      var token = jwt.sign(
        { userId: user_id, email: email },
        process.env.JWT_KEY
      );
      res.send({ msg: `Token ${token}` });
    } else {
      res.send({ msg: "Incorret password or email" });
    }
  });
});

app.post("/calculateBMI", authentication, async (req, res) => {
  const { height, weight, bmi } = req.body;
  const { userId } = req.body;

  // console.log(userId);
  const new_bmi = new BmiModle({
    bmi,
    userId,
    height,
    weight,
  });
  await new_bmi.save();

  res.send({ bmi });
});

app.get("/getCalculation", authentication, async (req, res) => {
  const { userId } = req.body;
  const bmi_data = await BmiModle.find({ userId });

  res.send({ msg: bmi_data });
});

app.get("/getProfile", authentication, async (req, res) => {
  const { userId } = req.body;
  const bmi_data = await UserModle.find({ _id: userId });

  res.send({ bmi_data });
});

app.listen(port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }

  console.log("Active");
});
