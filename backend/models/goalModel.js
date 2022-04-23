const mongoose = require('mongoose')

const goalScehma = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true,'Please Add a text value']
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Goal',goalScehma)