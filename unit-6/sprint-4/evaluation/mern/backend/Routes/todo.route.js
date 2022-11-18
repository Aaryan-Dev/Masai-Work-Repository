const express = require("express");

const { addTodos, getTodos } = require("../Controller/todos.controller");
const { AuthenticationMiddleWare } = require("../middleware/auth.middleware");

const todoRouter = express.Router();

// add todos
todoRouter.get("/", AuthenticationMiddleWare, addTodos);

// get todos
todoRouter.post("/add", AuthenticationMiddleWare, getTodos);

module.exports = { todoRouter };
