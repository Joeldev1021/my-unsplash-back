const {Schema, model} = require('mongoose');


const PhotoSchema = new Schema({
    label: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
    }
},
{
    versionKey: false,
    timestamps: true
})

module.exports = model('Photo', PhotoSchema) 