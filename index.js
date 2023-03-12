require('./startup/db')();

// Another way : include type : "module" inside package.json
// import express from 'express';
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const PORT = 5000;

const usersRoutes = require('./routes/users.js');

let members = [
    {
        name: "Loc",
        imgUrl: "https://res.cloudinary.com/dvty3aijx/image/upload/v1677946806/b8qksy3r7kudtpugpzto.webp"
    },
    {
        name: "Tung",
        imgUrl: "https://res.cloudinary.com/dvty3aijx/image/upload/v1678240489/rhthxvufejmehgcbrm27.png"
    },
    {
        name: "Tay",
        imgUrl: "https://res.cloudinary.com/dvty3aijx/image/upload/v1678240489/rhthxvufejmehgcbrm27.png"
    },
    {
        name: "noname",
        imgUrl: "https://res.cloudinary.com/dvty3aijx/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/cyayoavqcq1apzujfh7e.jpg"
    }
]


// Home Page for Server Side
app.get("/", (req, res) => {
    res.send('Welcome to my homepage!');
});

// API
app.get('/api/members', (request, response) => {
    response.json(members)
})


const server = app.listen(PORT, () => {
    console.log(`Server Running on port http://localhost:${PORT}`);
})

module.exports = server