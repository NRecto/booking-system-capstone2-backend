const User = require('./../models/User')
const bcrypt = require('bcrypt')
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