const router = require("express").Router();
const { studentLogin } = require("../controllers/authControllers");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/login", studentLogin);

module.exports = router;
