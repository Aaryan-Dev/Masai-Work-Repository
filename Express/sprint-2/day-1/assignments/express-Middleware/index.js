const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
var morgan = require("morgan");

// ___router___
const { messagesRouter } = require("./Router/messages.route");

//custom middleWares --- timeLogger(), urlLogger(), etc
//inBuilt expressMiddleWares --- express.json(), epress.text(), Router, etc
//npm MiddleWares --- cors(), compression middleWare, multer middleWare, etc

// expres middle wares
//used when making post, put, patch requests

// EXPRESS - MULTER MIDDLEWARE --- npm i multer
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

app.use(express.json());
// app.use(express.text());

//cros - npm i cors
// ________________ cros _________________

app.use(cors());

// or customise cors :-
//app.use(cros( {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }));

// __________________ middleWares (must be always at top) _____________________

const first = (req, res, next) => {
  console.log(1);
  next();
  console.log(2);
};

const second = (req, res, next) => {
  console.log(3);
  next();
  console.log(4);
};

// -------- timeLogger ---------

const time = (req, res, next) => {
  const start = new Date().getTime();
  next();
  const end = new Date().getTime();

  console.log(end - start + "ms");

  console.log("This is url-" + req.url + " This is method-" + req.method);
};

// EXPRESS - VALIDATION MIDDLEWARE

const validation = (req, res, next) => {
  // ID: number
  // Name: string
  // Rating: number
  // Description: string
  // Genre: string
  // Cast: string

  //      {
  //          "ID": 6,
  // "Name": "Dev",
  // "Rating": 10,
  // "Description": "nobody",
  // "Genre": "Male",
  // "Cast": "Na"
  //         }
  let object = req.body;
  console.log(typeof object.Description);

  if (
    typeof object.ID == "number" &&
    typeof object.Name == "string" &&
    typeof object.Rating == "number" &&
    typeof object.Description == "string" &&
    typeof object.Genre == "string" &&
    typeof object.Cast == "string"
  ) {
    next();
  } else {
    res.send("error 400");
  }
};

/**💫 */ app.use(first, second, time);
// /**💫 */ app.use(validation); /**--> incase of post only*/

// ______________________________________________________________________

// ___from Router___
app.use("/messages", messagesRouter);
// _____________________________________

app.post("/post", (req, res) => {
  res.send("Posted");
  //   console.log(99);
});
app.get("/", (req, res) => {
  res.send("homePage");
  console.log(100);
});

app.get("/about", (req, res) => {
  res.send("aboutPage");
  console.log(101);
});

app.get("/contact", (req, res) => {
  res.send("contactPage");
  console.log(102);
});

// serving----------------------
app.listen(8080, () => {
  console.log("Active");
});
