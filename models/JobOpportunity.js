const mongoose = require('mongoose')

const jobOppotunity = new mongoose.Schema({
   
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
}, {
    timestamps : true
})

const JobOpportunity = mongoose.model('JobOpportunity', jobOppotunity)

module.exports = JobOpportunity