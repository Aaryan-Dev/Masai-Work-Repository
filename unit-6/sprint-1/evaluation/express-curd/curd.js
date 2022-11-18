const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

//*************************** Q2 Express CURD ************************
// _________ GET ________________________________________________________________________

app.get("/", (req, res) => {
  res.send("Welcome to CURD --- access /products in url ");
});
app.get("/products", (req, res) => {
  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  res.send(finalData);
});

app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == productId) {
      res.send(finalData[i]);
    } else {
    }
  }
});

//__________ POST ____________________________________________________________________________

app.post("/products/create", (req, res) => {
  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  finalData.push(req.body);

  fs.writeFileSync("./db.json", JSON.stringify(data), { encoding: "utf-8" });

  res.send("Data is Written---POST");
});

//_________ DELETE _________________________________________________________________________

app.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == productId) {
      finalData.splice(i, 1);
    } else {
    }
  }

  fs.writeFileSync("./db.json", JSON.stringify(data), { encoding: "utf-8" });

  res.send("Data is Deleted---DELETE");
});

//_________ PUT _______________________________________________________________________________

app.put("/products/:productId", (req, res) => {
  const { productId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == productId) {
      finalData.splice(i, 1);
      finalData.push(req.body);
    } else {
    }
  }

  fs.writeFileSync("./db.json", JSON.stringify(data), { encoding: "utf-8" });

  res.send("Data is Modified---PUT");
});

//__________ PATCH _____________________________________________________________________________
app.patch("/products/:productId", (req, res) => {
  const { productId } = req.params;

  let data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  data = JSON.parse(data);
  const finalData = data.products;

  for (let i = 0; i < finalData.length; i++) {
    if (finalData[i].id == productId) {
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
