const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const {
  teacherLogin,
  checkTeacherLogin,
} = require("../controllers/authControllers");

router.use(bodyParser.urlencoded({ extended: true }));
router.post("/login", teacherLogin);

module.exports = router;
