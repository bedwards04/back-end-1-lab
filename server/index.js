const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/users', function(req, res) {
    const myFriends = ['Hunter', 'Eli', 'Ethan', 'Nik', 'Joseph', 'Will'];
    res.status(200).send(myFriends)
});

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, function() {console.log(`Server running on ${SERVER_PORT}`)});