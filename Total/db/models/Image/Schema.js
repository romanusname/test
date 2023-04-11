let mongoose = require('mongoose')
const ImageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
        {
            data: Buffer,
            contentType: String
        }
})

module.exports = mongoose.models.Image || mongoose.model('Slot', ImageSchema)