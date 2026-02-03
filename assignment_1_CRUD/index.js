const express = require("express");
require('dotenv').config();
const { dbConnect } = require("./src/configuration/dbConnect");
const { router } = require("./src/routes/courseRoute");
const { Course } = require("./src/models/Course");

const app = express();

const port = 3000;

app.use(express.json());

app.use('/', router)

Course.sync({force:false})

app.listen(port, async () => {
  console.log(`Server is running on ${port}`);
  await dbConnect();
});
