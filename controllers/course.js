// const express = require('express');

const Course = require('./../models/Course');




module.exports.add = (reqBody) => {
    let course = new Course({
        name: reqBody.name,
        description: reqBody.description,
        price: reqBody.price
    })
    return course.save().then(() => true)
    .catch( () => false);
};

module.exports.getAll = () => {
    return Course.find()
        .then(courses => courses)
}

module.exports.get = (courseId) => {
    return Course.findById(courseId)
        .then((course) => course)
}

module.exports.update = (reqBody) => {
    return Course.findByIdAndUpdate(reqBody._id, {
            name: reqBody.name,
            description: reqBody.description,
            price: reqBody.price
        })
        .then(() => true)
        .catch(err => false)
}

module.exports.archive = courseId => {
    return Course.findByIdAndUpdate(courseId, { isActive: false })
        .then(() => true)
}

module.exports.enable = courseId => {
    return Course.findByIdAndUpdate(courseId, { isActive: true })
    .then(() => true)
    .catch( (err) => console.log(err.message) )

}

// module.exports.comment = (courseId, bodyComment) => {
//     return Course.findByIdAndUpdate(courseId, {comment: bodyComment})
//     .then( comment => comment )
//     .catch( () => false )
// }
