const express = require("express");
const app = express();
const cors = require("cors");
const teacherRouter = require("./routers/teacherLoginRouter");
const studentRouter = require("./routers/studentLoginRouter");
const { checkLogin } = require("./controllers/authControllers");

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

app.get("/login", checkLogin);

const PORT = process.env.PORT;

app.listen(PORT, function (req, res) {
  console.log(`Server is running on port ${PORT}`);
});
