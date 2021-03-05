const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    // lastname
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    // email
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email is already exists"]
    },
    // password
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    // isAdmin
    isAdmin: {
        type: Boolean,
        default: false
    },
    // mobileNo.
    mobileNo: {
        type: String,
        required: [true, "Mobile number is required"]
    },
    // enrollments
    enrollments: [{
        courseId: {
            type: String,
            required: [true, 'Course ID is required']
        },
        enrolledOn: {
            type: Date,
            default: new Date()
        },
        status: {
            type: String,
            default: 'Enrolled'
        }

    }]

})

module.exports = mongoose.model('User', userSchema);