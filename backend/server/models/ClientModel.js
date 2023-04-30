const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
        name: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        }
    },
    {
        timestamps: true
    })

module.exports = mongoose.model("Client",clientSchema)