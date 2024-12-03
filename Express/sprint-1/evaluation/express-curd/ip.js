const express = require("express");
const fs = require("fs");

const dns = require("dns");

const app = express();
app.use(express.json());
// ***********************  Q1 IP address ***************************

app.post("/getmeip", (req, res) => {
  // let data = fs.readFileSync("./ip.json", { encoding: "utf-8" });
  // data = JSON.parse(data);
  data = req.body;

  // console.log(req.body);

  const website = data.website_name;
  dns.lookup(website, (err, address, family) => {
    res.send(address);
    console.log(address);
  });
});

// serving------------------

app.listen(7000, () => {
  console.log("listing IP");
});
