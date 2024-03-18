const express = require("express");
const route = require("./route");

/* Initiate express app */
const app = express();
const port = 5000;

/* Enable request body */
app.use(express.json());

/* Enable Static */
app.use(express.static("public"));

app.use("/", route);

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});

/* Error middleware */
app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
