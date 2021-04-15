const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();

//When we have a forms, with this line can accepts this forms html, extended false said that only
//recive json format, not image or video for instance
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS
app.use(cors());

const users = {
  fullName: "",
  email: "",
  password: "",
  passwordR: "",
};

app.get("/get", (req, res) => {
  res.status(200).send(users);
});

app.post("/postUser", (req, res) => {
  res.send("Succes");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
