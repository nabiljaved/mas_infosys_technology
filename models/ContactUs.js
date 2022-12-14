const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema({
   
    name : {
        type: String,
        required : true,
        trim : true, 
    },
    email : {
        type: String,
        required : true,
        trim : true, 
    },
    phone : {
        type: String,
        required : true,
        trim : true, 
    },
    subject : {
        type: String,
        required : true,
        trim : true, 
    },
    message : {
        type: String,
        required : true,
        trim : true, 
    },
    address : {
        type: String,
        required : true,
        trim : true, 
    },
}, {
    timestamps : true
})

const ContactUS = mongoose.model('ContactUs', contactUsSchema)

module.exports = ContactUS