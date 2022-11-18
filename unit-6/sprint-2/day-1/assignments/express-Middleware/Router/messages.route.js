const express = require("express");

const messagesRouter = express.Router();

messagesRouter.get("/", (req, res) => {
  res.send("messages");
});
messagesRouter.post("/post", (req, res) => {
  res.send("messages posted");
});
messagesRouter.delete("/delete", (req, res) => {
  res.send("messages deleted");
});

module.exports = { messagesRouter };
