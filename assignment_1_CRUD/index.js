const express = require("express");
require("dotenv").config();
const { dbConnect } = require("./src/configuration/dbConnect");
const { router } = require("./src/routes/courseRoute");
const { Course } = require("./src/models/Course");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use("/", router);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// static files (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

Course.sync({ force: false });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/addCourse", (req, res) => {
  res.render("addCourse");
});

app.listen(port, async () => {
  console.log(`Server is running on ${port}`);
  await dbConnect();
});
