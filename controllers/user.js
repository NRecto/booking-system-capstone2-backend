const User = require('./../models/User')

module.exports.register = (params) => {



    let user = new User({
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        mobileNo: params.mobileNo,
        password: params.password,
    })

    return user.save()
        .then(() => true)
        .catch(() => false)

}