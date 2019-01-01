var mongoose = require('mongoose');

var Coba = mongoose.model('Coba', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim:true
    },
    completed: {
        type: Boolean,
        default: false
    },
    CompletedAt: {
        type: Number,
        default: null
    },
});


module.exports = {Coba};