const routes = require('express').Router();

// create course
routes.post('/', (req, res) => {
    res.send(`Add courses`)
})

module.exports = routes;