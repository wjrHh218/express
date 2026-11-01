exports.list = async (req, res) => {
  console.log(req.method);
  res.send("./user-list");
};

exports.user = async (req, res) => {
  console.log(req.method);
  res.send("./user-delet");
};
