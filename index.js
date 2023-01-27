require('./startup/db')();

const express = require('express');
const app = express();

const post = 4231;

const server = app.listen(post, () => {
    console.log(`listening on post ${post}`)
})

module.exports = server


