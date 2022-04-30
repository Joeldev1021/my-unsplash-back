const express = require("express");
const app = express();
const morgan = require("morgan");
// dotenv config
require("dotenv").config();

// mongoose db config
/* require("./src/db.js"); */
const indexRouter = require("./src/router/index.routes");
const PORT = process.env.PORT || 3000;
// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
