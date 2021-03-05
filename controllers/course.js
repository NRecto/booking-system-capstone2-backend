// const express = require('express');

let Course = require('./../models/Course')

module.exports.add = (reqBody) => {
    let course = new Course({
        name: reqBody.name,
        description: reqBody.description,
        price: reqBody.price
    })
    return course.save().then(() => true);
}