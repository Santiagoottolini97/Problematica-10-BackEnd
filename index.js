const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
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

app.post('/registerUser', (req, res) => {
    users.push(req.body);
    users.join(', ');
    res.send(users);
});
app.put('/loginUser', (req, res) => {
    const verify = {
        emailr: req.body.emailr,
        password: req.body.password,
    };

    users.find((data) => {
        if (verify.emailr === data.emailr && verify.password === data.password) {
            res.status(200).send('Logged successfully');
            return;
        } else {
            res.status(400).send('Error loggin, invalid email or password');
            return;
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
