// ------------------------ CURD with express ---------------------------

const express = require("express");
const fs = require("fs");

const app = express();

// middleware
app.use(express.json());

//server
app.get("/", (req, res) => {
  res.send("homepage");
});
// ****************************💫 GET (products list) ***********************************
app.get("/products", (req, res) => {
  const { page } = req.query;
  const data = fs.readFileSync("./db.json", { encoding: "utf-8" });

  const parsedData = JSON.parse(data);
  const products = parsedData.products;
  res.send(products);
  // res.send(JSON.stringify(page));
});

// ****************************💫 GET (individul products) ***********************************
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  // res.send("This is the" + id);

  const item = fs.readFileSync("./db.json", { encoding: "utf-8" });

  const itemP = JSON.parse(item);

  const value = itemP.products;

  for (let i = 0; i < value.length; i++) {
    if (value[i].id == id) {
      // console.log(value[i]);
      res.send(value[i]);
    } else {
    }
  }
});

// ****************************💫 POST ***********************************
app.post("/products", (req, res) => {
  const file = fs.readFileSync("./db.json", { encoding: "utf-8" });

  const parsedFile = JSON.parse(file);
  parsedFile.products.push(req.body);

  console.log(parsedFile);
  const finalFile = JSON.stringify(parsedFile);
  fs.writeFileSync("./db.json", finalFile, { encoding: "utf-8" });
  res.send("written");
});

// *****************************💫 DELETE *********************************
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  // res.send("This is the" + id);

  const item = fs.readFileSync("./db.json", { encoding: "utf-8" });

  const itemP = JSON.parse(item);

  const value = itemP.products;

  for (let i = 0; i < value.length; i++) {
    if (value[i].id == id) {
      value.splice(i, 1);
      console.log(value);

      fs.writeFileSync("./db.json", JSON.stringify(itemP), {
        encoding: "utf-8",
      });

      res.send("deleted");
    } else {
    }
  }
});

// *********************💫 PUT ***************************

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  // res.send("This is the" + id);

  const item = fs.readFileSync("./db.json", { encoding: "utf-8" });

  const itemP = JSON.parse(item);

  const value = itemP.products;

  for (let i = 0; i < value.length; i++) {
    if (value[i].id == id) {
      value.splice(i, 1);
      value.push(req.body);
      console.log(value);

      fs.writeFileSync("./db.json", JSON.stringify(itemP), {
        encoding: "utf-8",
      });

      res.send("puted");
    } else {
    }
  }
});

// **********************💫 PATCH *****************************
app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  // res.send("This is the" + id);

  const item = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const itemP = JSON.parse(item);
  const value = itemP.products;

  for (let i = 0; i < value.length; i++) {
    if (value[i].id == id) {
      let object = value[i];
      value.splice(i, 1);
      value.push({ ...object, ...req.body });
      console.log(value);

      fs.writeFileSync("./db.json", JSON.stringify(itemP), {
        encoding: "utf-8",
      });

      res.send("patched");
    } else {
    }
  }
});

// ------- serving -------
app.listen(8080, () => {
  console.log("Active");
});
