const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Firtname is required.']
    },
    lastName: {
        type: String,
        required: [true, 'Lastname is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],

        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required.']
    },
    mobileNo: {
        type: String,
        required: [true, 'Mobile number is required.']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    enrollments: [{
        courseId: {
            type: String,
            required: true,
            unique: true
        },
        enrolledOn: {
            type: Date,
            default: new Date()
        },
        status: {
            type: String,
            default: 'Pending'
        }
    }]
})

module.exports = mongoose.model('User', userSchema);