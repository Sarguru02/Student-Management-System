const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  teacherLogin,
  checkTeacherLogin,
} = require("../controllers/authControllers");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
router.post("/login", teacherLogin);

module.exports = router;
