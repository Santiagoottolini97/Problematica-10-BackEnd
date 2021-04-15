const express = require("express");
const userRoutes = require("./src/routes/security");

const app = express();

app.use("/", userRoutes);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
