const mongoose = require('mongoose')

const promotionSchema = new mongoose.Schema({
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
    title : {
        type: String,
        required : true,
        trim : true, 
    },
    description : {
        type: String,
        required : true,
        trim : true, 
    },
    expire : {
        type: String,
        required : true,
        trim : true, 
    },
    city : {
        type: String,
        required : true,
        trim : true, 
    },
   
}, {
    timestamps : true
})

const Promotion = mongoose.model('Promotion', promotionSchema)

module.exports = Promotion