const { Student } = require("../Modles/student.modle");

const getStudentsData = (req, res) => {
  Student.find({})
    .then((success) => res.send(success))
    .catch((error) => console.log(error));
};

const postStudentsData = async (req, res) => {
  const data = req.body;
  const student = new Student(data);
  await student.save();
  res.send(student);
};

module.exports = { getStudentsData, postStudentsData };
