const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
// dotenv config
require("dotenv").config();

// mongoose db config
require("./db");
const indexRouter = require("./router/index.routes");
const PORT = process.env.PORT || 3000;
// middleware
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
