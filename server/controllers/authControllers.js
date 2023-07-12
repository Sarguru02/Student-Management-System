module.exports.checkSession = (req, res) => {
  console.log("inside Check Session");
};

module.exports.handleLogin = (req, res) => {
  console.log("inside handleLogin");
  console.log(req.body);
  res.send("hello");
};

module.exports.test = (req, res) => {
  res.send("test is actually  working");
};
