const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    useremail : {
        type: String,
        required : true,
        trim : true, 
    },
    name : {
        type: String,
        required : true,
        trim : true, 
    },
    address : {
        type: String,
        required : true,
        trim : true, 
    },
    phone : {
        type: String,
        required : true,
        trim : true, 
    },
}, {
    timestamps : true
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact