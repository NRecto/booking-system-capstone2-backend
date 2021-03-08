const User = require('./../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = (params) => {



    let user = new User({
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        mobileNo: params.mobileNo,
        password: bcrypt.hashSync(params.password, 5),
    })

    return user.save()
        .then(() => true)
        .catch(() => false)
    // .catch((err) => console.log(err.message))

}

module.exports.login = (reqBody) => {
    return User.findOne({ email: reqBody.email })
        .then(user => {
            if (!user) {
                return false;
            }
            let isPasswordMatched = bcrypt.compareSync(reqBody.password, user.password);
            if (!isPasswordMatched) {
                return false;
            };

            let accessToken = jwt.sign({
                    id: user._id,
                    email: user.email,
                    isAdmin: user.isAdmin
                },
                'courseBooking');
            return {
                Token: accessToken
            }
        })
}