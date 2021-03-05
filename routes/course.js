const routes = require('express').Router();

const CourseController = require('./../controllers/course')

// create course
routes.post('/', (req, res) => {
    CourseController.add(req.body).then(course => {
        res.send(course)
    })
})

// GET ALL
routes.get('/', (req, res) => {
    CourseController.getAll().then(courses => res.send(courses))
});

// GET SPECIFIC
routes.get('/:courseId', (req, res) => {
    CourseController.get(req.params.courseId).then(courses => res.send(courses))
});

// update
routes.put('/', (req, res) => {
    CourseController.update(req.body).then(result => res.send(result))
    // update the selected 
    // Course id will be sent in req.body
    // also, updates for course can be accessed in req.body
})


routes.delete('/:courseId', (req, res) => {
    CourseController.archive(req.params.courseId).then(courses => res.send(courses))
})

module.exports = routes;