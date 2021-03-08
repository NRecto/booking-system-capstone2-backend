const User = require('./models/User');
const jwt = require('jsonwebtoken');

module.exports.authCheckToken = (req, res, next) => {
    // check token if existing
    if (!req.headers.authorization) return res.send(`why`);

    // decode token

    let token = req.headers.authorization.replace("Bearer ", "")

    let decoded = jwt.verify(token, process.env.SECRET);
    // console.log(decoded.id)

    User.findById(decoded.id)
        .then(user => {
            if (!user) {
                return res.send(`Bawal ka Dito!!!`);

            }
            return user;
            next();
        })
}
module.exports.createAccessToken = (user) => {

    let accessToken = jwt.sign({
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin
        },
        process.env.SECRET);
    return accessToken
}