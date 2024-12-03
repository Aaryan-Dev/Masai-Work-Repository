const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// middleWare ---
const validator = (req, res, next) => {
  if (req.method === "POST") {
    const object = req.body;
    console.log(object);

    if (
      typeof object.id === "number" &&
      typeof object.title === "string" &&
      typeof object.content === "string" &&
      typeof object.author === "string"
    ) {
      next();
    } else {
      res.send("Validation Failed");
    }
  } else {
    next();
  }
};

const logger = (req, res, next) => {
  let document = fs.readFileSync("./logs.txt", { encoding: "ascii" });

  let info = "";
  info = info + req.method + "," + req.url + "," + req.get("User-Agent");

  document = document + "\n" + info;

  fs.writeFileSync("./logs.txt", document, { encoding: "ascii" });
  next();
};

const guard = (req, res, next) => {
  if (
    req.method === "PUT" ||
    req.method === "PATCH" ||
    req.method === "DELETE"
  ) {
    let { q } = req.query;
    console.log(q);
    if (q === "54213") {
      next();
    } else {
      res.send("You are not authorised to do this operation");
    }
  } else {
    next();
  }
};

app.use(validator, logger, guard);
//*************************** Q2 Express CURD ************************
// _________ GET ________________________________________________________________________

app.get("/", (req, res) => {
  res.send(" Visit /posts ");
});
app.get("/posts", (req, res) => {
  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  res.send(finalData);
});

app.get("/posts/:postId", (req, res) => {
  const { postId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == postId) {
      res.send(finalData[i]);
    } else {
    }
  }
});

//__________ POST ____________________________________________________________________________

app.post("/posts/create", (req, res) => {
  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  finalData.push(req.body);

  fs.writeFileSync("./db.json", JSON.stringify(data), { encoding: "utf-8" });

  res.send("Data is Written---POST");
});

//_________ DELETE _________________________________________________________________________

app.delete("/posts/:postId", (req, res) => {
  const { postId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == postId) {
      finalData.splice(i, 1);
    } else {
    }
  }

  fs.writeFileSync("./db.json", JSON.stringify(data), { encoding: "utf-8" });

  res.send("Data is Deleted---DELETE");
});

//_________ PUT _______________________________________________________________________________

app.put("/posts/:postId", (req, res) => {
  const { postId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == postId) {
      finalData.splice(i, 1);
      finalData.push(req.body);
    } else {
    }
  }

  fs.writeFileSync("./db.json", JSON.stringify(data), { encoding: "utf-8" });

  res.send("Data is Modified---PUT");
});

//__________ PATCH _____________________________________________________________________________
app.patch("/posts/:postId", (req, res) => {
  const { postId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == postId) {
      let object = finalData[i];
      finalData.splice(i, 1);

      finalData.push({ ...object, ...req.body });
    } else {
    }
  }

  fs.writeFileSync("./db.json", JSON.stringify(data), { encoding: "utf-8" });

  res.send("Data is Modified---PATCHED");
});

// serving---------------------
app.listen(8080, () => {
  console.log("Active CURD");
});
