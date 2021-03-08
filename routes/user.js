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
const jwt = require('jsonwebtoken');
routes.get('/details', auth.verify, (req, res) => {
    // res.send(req.decodedToken)
    UserController.details(req.decodedToken.id).then(result => res.send(result))
})

// enroll student

module.exports = routes;