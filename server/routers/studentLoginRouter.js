const router = require("express").Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const { studentLogin } = require("../controllers/authControllers");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/login", studentLogin);

module.exports = router;
