const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();

//When we have a forms, with this line can accepts this forms html, extended false said that only
//recive json format, not image or video for instance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use(cors());

const users = [];

app.get('/get', (req, res) => {
    res.status(200).send(users);
});

app.post('/postUser', (req, res) => {
    users.push(req.body);
    users.join(', ');
    res.send(users);
});
app.put('/putUser', (req, res) => {
    const saveUser = users.find((data) => {
        return data.emailr === emailr;
    });
    if (saveUser) {
        res.send(saveUser);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
