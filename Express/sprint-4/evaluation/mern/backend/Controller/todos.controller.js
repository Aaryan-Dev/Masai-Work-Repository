// app
// const app = express();
// app.use(express.json());

const { TodoModle } = require("../modles/Todo.modle");
const { UserModle } = require("../modles/User.modle");

// npms
// const cors = require("cors");
// app.use(cors());
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const addTodos = async (req, res) => {
  const { taskname, status, tag, userId } = req.body;

  console.log(userId);

  const new_todo = new TodoModle({
    taskname,
    status,
    tag,
    userId: userId,
  });

  await new_todo.save();
  res.send({ msg: "Task added Susseccfully" });
};

const getTodos = async (req, res) => {
  const { userId } = req.body;
  const todo_data = await TodoModle.find({ userId });

  res.send({ msg: todo_data });
};

module.exports = { getTodos, addTodos };
