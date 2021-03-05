const routes = require('express').Router();

const CourseController = require('./../controllers/course')

// create course
routes.post('/', (req, res) => {
    CourseController.add(req.body).then(course => {
        res.send(course)
    })
})

module.exports = routes;