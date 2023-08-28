const express = require("express");
const errorHandler = require("./middleWare/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
connectDb();
app.use(express.json());
app.use(errorHandler);

app.use("/api/contacts", require("./controller/ContactController"));

app.listen(port, () => {
  console.log(`server is running on port  ${port}`);
});
