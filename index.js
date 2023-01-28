require('./startup/db')();

const express = require('express');
const app = express();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
const post = 4231;

const server = app.listen(post, () => {
    console.log(`listening on post http://localhost:${post}`)
})

module.exports = server