const routes = require('express').Router();

const UserController = require('./../controllers/user');

const auth = require('./../auth')

routes.post('/', (req, res) => {
    if (req.body.password !== req.body.confirmPassword) return res.send(false);
    UserController.register(req.body).then(result => res.send(result))
})
// login
routes.post('/login', (req, res) => {
    UserController.login(req.body).then(login => res.send(login))
})
// details

routes.get('/details', auth.verify, (req, res) => {
    // res.send(req.decodedToken)
    UserController.details(req.decodedToken.id).then(result => res.send(result))
})

// enroll student
routes.post('/enroll', auth.verify, (req, res) => {
    UserController.enroll(req.decodedToken.id, req.body.courseId).then(result => {
        return res.send(result)
    })

})




// sir alex solution
// routes.post('/enroll', auth.verify, (req, res) => {
//     UserController.enroll({
//         userId: req.decodedToken.id,
//         courseId: req.body.courseId
//     }).then(result => {
//         return res.send(result)
//     })

// })
module.exports = routes;