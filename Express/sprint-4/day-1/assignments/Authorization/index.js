const express = require("express");
const jwt = require("jsonwebtoken");
const { connection } = require("./config/db");
const bcrypt = require("bcrypt");
const { UserModel } = require("./models/User.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    var decoded = jwt.verify(token, "abcd12345");
    req.body.email = decoded.email;
    next();
  } catch (err) {
    res.send("Please login again");
  }
};

const authorisation = (permittedrole) => {
  return async (req, res, next) => {
    const email = req.body.email;
    const user = await UserModel.findOne({ email: email });
    const role = user.role;

    if (permittedrole.includes(role)) {
      next();
    } else {
      res.send("Not authorised");
    }
  };
};

app.get("/dashboard", authentication, (req, res) => {
  res.send("Here is your dashboard data");
});

app.get("/reports", (req, res) => {
  res.send("Some important reports");
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
      const token = jwt.sign({ email: email }, "abcd12345");
      res.send({ msg: "Login successfull", token: token });
    } else {
      res.send("Login failed");
    }
  });
});

//no authentication, no authorisation
app.get("/products", (req, res) => {
  res.send("here are you products");
});

//authentication, no authorisation
app.get("/products/cart", authentication, (req, res) => {
  res.send(`Here are the products in your cart.`);
});

//Authentication, Authorisation (seller -> permission for this route)
app.post(
  "/products/create",
  authentication,
  authorisation(["seller"]),
  async (req, res) => {
    res.send("Product created");
  }
);

//Authorisation (customer --> permission for this route)
app.post(
  "/productsFeedback",
  authentication,
  authorisation(["customer"]),
  async (req, res) => {
    res.send("Product Feedback taken");
  }
);

app.post(
  "/assignments/edit",
  authentication,
  authorisation(["ia", "instructor"]),
  (req, res) => {
    res.send("edited");
  }
);
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
  } catch (err) {
    console.log("Error connecting to DB");
    console.log(err);
  }
  console.log("listening on PORT 8004");
});
