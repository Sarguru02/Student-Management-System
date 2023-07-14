const { doc, getDoc } = require("firebase/firestore");
const { teachers } = require("../models/users");

module.exports.studentLogin = (req, res) => {};

module.exports.teacherLogin = async (req, res) => {
  const name = req.body.input.roll;
  const password = req.body.input.password;
  const docRef = doc(teachers, name);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    if (data.username !== name || data.password !== password) {
      return res.status(401).send("Password is wrong");
    }
    req.user = {
      userType: "teacher",
      isLogged: true,
    };
    return res.status(200).send({
      userType: "teacher",
      isLogged: true,
    });
  } else {
    res.status(401).send("User not allowed to login");
  }
};

module.exports.checkTeacherLogin = async (req, res, next) => {
  if (req.user && req.user.isLogged && req.user.userType === "teacher") {
    return res.status(200).send({
      userType: "teacher",
      isLogged: true,
    });
  }
  return next();
};
