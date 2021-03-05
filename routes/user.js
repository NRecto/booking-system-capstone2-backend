const routes = require('express').Router();

const UserController = require('./../controllers/user');

routes.post('/', (req, res) => {
    if (req.body.password !== req.body.confirmPassword) return res.send(false);
    UserController.register(req.body).then(result => res.send(result))
})



module.exports = routes;