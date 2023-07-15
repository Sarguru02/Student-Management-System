const { doc, getDoc } = require("firebase/firestore");
const { teachers, students } = require("../models/users");

module.exports.studentLogin = async (req, res) => {
  const username = req.body.roll;
  const password = req.body.password;
  const userType = req.body.userType;
  const docRef = doc(students, username);
  const docSnap = await getDoc(docRef);
  return res.send(docSnap.data());
  if (docSnap.exists() && userType === "student") {
    const data = docSnap.data();
    if (data.roll !== username || data.password !== password) {
      return res.status(401).send("Username or password is wrong");
    }
    req.user = {
      userType: "student",
      isLogged: true,
    };
    return res.status(200).send({
      userType: "student",
      isLogged: true,
    });
  }
};

module.exports.teacherLogin = async (req, res) => {
  const name = req.body.roll;
  const password = req.body.password;
  const userType = req.body.userType;
  const docRef = doc(teachers, name);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists() && userType === "teacher") {
    const data = docSnap.data();
    if (data.name !== name || data.password !== password) {
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
