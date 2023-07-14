const express = require("express");
const app = express();
const router = require("./routers/teacherLoginRouter");

app.use("/teacher", router);

const PORT = process.env.PORT;

app.listen(PORT, function (req, res) {
  console.log(`Server is running on port ${PORT}`);
});
