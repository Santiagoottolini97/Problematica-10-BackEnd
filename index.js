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
  fullName: [],
  emailr: [],
  password: [],
  passwordR: [],
};

app.get("/get", (req, res) => {
  res.status(200).send(users);
});

app.post("/postUser", (req, res) => {
  users.fullName.push(req.body.namer)
  users.emailr.push(req.body.emailr)
  users.password.push(req.body.password)
  users.passwordR.push(req.body.passwordR)
  
  res.send(users);
  console.log(users)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
