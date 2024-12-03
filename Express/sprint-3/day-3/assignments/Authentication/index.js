const express = require("express");
const { connection } = require("./Config/db");

const { studentRoute } = require("./Routes/students.route");
const { iaRoute } = require("./Routes/ia.route");

const { UserModel } = require("./Modles/user.modle");

var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 5, async function (err, hashed_password) {
    if (err) {
      res.send("Something went wrong, please signup later");
    }
    const new_user = new UserModel({
      email: email,
      password: hashed_password,
    });
    await new_user.save();
    res.send("Sign up successfull");
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  const hashed_password = user.password;
  bcrypt.compare(password, hashed_password, function (err, result) {
    if (result) {
      const token = jwt.sign({ email: email }, "secretkey234");
      res.send({ msg: "Login successfull", token: token });
    } else {
      res.send("Login failed");
    }
  });
});
// protected route :-
app.get("/about", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log(token);

  // res.send("in progress");
  try {
    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, "secretkey234");
    console.log(decoded);
    res.send("Login Successful");
  } catch (err) {
    console.log(err);
    res.send("Login again");
  }
});
//
app.use("/students", studentRoute);
app.use("/ias", iaRoute);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB Successfully");
  } catch (err) {
    console.log("Error connecting to db");
    console.log(err);
  }
  console.log("Listening at 8080");
});
