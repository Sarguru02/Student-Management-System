const express = require("express");
const app = express();
const teacherRouter = require("./routers/teacherLoginRouter");
const studentRouter = require("./routers/studentLoginRouter");

app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

const PORT = process.env.PORT;

app.listen(PORT, function (req, res) {
  console.log(`Server is running on port ${PORT}`);
});
