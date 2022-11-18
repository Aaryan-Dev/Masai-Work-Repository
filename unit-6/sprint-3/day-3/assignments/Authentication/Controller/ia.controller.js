const { Ia } = require("../Modles/ia.modle");

const getIaData = (req, res) => {
  Ia.find({})
    .then((success) => res.send(success))
    .catch((error) => console.log(error));
};

const getIaByAge = async (req, res) => {
  const { agee } = req.params;
  console.log(agee);
  Ia.find({ age: agee.toString() })
    .then((suc, err) => {
      res.send(suc);
    })
    .catch((suc, err) => {
      res.send(err);
    });
};

module.exports = { getIaData, getIaByAge };
