const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Enter the First name"]
    },
    lastname: {
        type: String,
        required: [true, "Enter the Last name"]
    },
    email: {
        type: String,
        required: [true, "Please provide an Email"],
        unique: [true, "Email Exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    phone: {
        type: Number,
        minimum: 0
    },
    address: {
        type: String,
        required: [true, "Enter the address"]
    },

    userrole: {
        type: mongoose.Schema.Types.ObjectId, ref: "UserRole",
    }
})

const Users = mongoose.model('Users', usersSchema)

module.exports = Users