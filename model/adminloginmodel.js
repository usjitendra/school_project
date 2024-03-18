const mongoose = require('mongoose');
const db = require('../config/dbconnection');
const bcrypt = require('bcrypt');
const validation = require('validation');


const adminlogin = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    lastname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        // required: true,
        // validation(email) {
        //     if (!validation.isEmail(email)) {
        //         throw new Error("email is invalid");
        //     }
        // }
    },
    password: {
        type: String,
        require: true
    },
    mobile: {
        type: String
    }


});
adminlogin.pre('save', async function (next) {
    this.email = this.email.toLowerCase()
    if (!this.isModified("password")) {
        next();
    } else {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
})
module.exports = db.db1.model('login', adminlogin);