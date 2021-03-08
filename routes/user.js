const routes = require('express').Router();

const UserController = require('./../controllers/user');

routes.post('/', (req, res) => {
    if (req.body.password !== req.body.confirmPassword) return res.send(false);
    UserController.register(req.body).then(result => res.send(result))
})
// login
routes.post('/login', (req, res) => {
    UserController.login(req.body).then(login => res.send(login))
})
// details

// enroll student


module.exports = routes;