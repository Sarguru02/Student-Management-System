const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routers/authRouter");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(6969, function (req, res) {
  console.log("Server running successfully on port 6969");
});
