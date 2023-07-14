const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test } = require("../controllers/authControllers");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
router.route("student/login").post();

module.exports = router;
