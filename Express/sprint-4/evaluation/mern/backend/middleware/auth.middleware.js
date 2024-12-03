const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const AuthenticationMiddleWare = (req, res, next) => {
  const { token } = req.query;
  var decoded = jwt.verify(token, process.env.JWT_KEY);
  if (decoded) {
    // res.send(decoded);
    req.body.userId = decoded.userId;
    next();
  } else {
    res.send("LogIn again");
  }
};

module.exports = { AuthenticationMiddleWare };
