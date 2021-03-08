const jwt = require('jsonwebtoken');

module.exports.createAccessToken = (user) => {

    let accessToken = jwt.sign({
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin
        },
        process.env.SECRET);
    return accessToken
}