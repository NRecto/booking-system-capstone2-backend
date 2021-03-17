const User = require('./../models/User');
const Course = require('./../models/Course')
const bcrypt = require('bcrypt');
const auth = require('./../auth')
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

            let accessToken = auth.createAccessToken(user)
            return {
                Token: accessToken
            }
        })
}

module.exports.details = (id) => {
    return User.findById(id, { password: 0 }).then(user => user)
};

module.exports.enroll = (id, courseId) => {
    return Course.findById(courseId).then(result => {
            if (!courseId) {
                return { msg: 'course not available' };
            };
            if (courseId) {
                return User.findByIdAndUpdate(id, { $push: { enrollments: [{ courseId: courseId }] } }, { new: true })

            }
        }).then(updateCourse => {
            return Course.findByIdAndUpdate(courseId, { $push: { enrollees: [{ userId: id }] } }, { new: true })
        }).then(() => true)
        .catch((err) => err.message)
}

// sir alex solution

// module.exports.enroll = (params) => {
//     return User.findById(params.userId).then(user => {
//         user.enrollments.push({ courseId: params.courseId })
//         user.save();
//     })
// }

// module.exports.enroll = (id, courseId) => {
//     return Course.findById(params.courseId)
//     .then( course => {
//         if (!course) return false;
//         return User.findByIdAndUpdate(params.userId,{
//             $push : { enrollments : { courseId : params.courseId}}
//         })
//     })
//     .then( () =>{
//         return Course.findByIdAndUpdate(params.courseId, {
//             $push : { enrollees: { userId: params.userId}}
//         })
//     }).then(()=> true)
//     .catch(() => false)
// }