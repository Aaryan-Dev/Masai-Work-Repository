const http = require("http");
const fs = require("fs");

const Data = require("./data");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/posts") {
      // res.end(JSON.stringify(Data));

      // or use this json method 👇

      const posts = fs.readFileSync("./posts.json", { encoding: "utf-8" });
      res.setHeader("content-type", "application/json");
      return res.end(JSON.stringify(posts));
    }
    // stream pipe method
    else if ("/stream") {
      const readStream = fs.createReadStream("./posts.json", {
        encoding: "utf-8",
      });
      readStream.pipe(res);
    } else if (req.url === "/todos") {
      return res.end("this is todos");
    } else {
      res.setHeader("content-type", "text/html");
      //   res.setHeader("content-type", "text/plain");
      res.end("<h2>invalid</h2>");
    }
  } else if (req.method === "POST") {
    //post method
    if (req.url === "/uploaddata") {
      let str = "";
      req.on("data", function (packet) {
        str += packet;
      });
      req.on("end", () => {
        // fs.writeFileSync("./dummy.txt", str, { encoding: "utf-8" });
        fs.appendFileSync("./dummy.txt", str, { encoding: "utf-8" });
        res.end("data  is written");
      });
    }
  }
});

server.listen(5000);

// autocannon
// npx autocannon url
